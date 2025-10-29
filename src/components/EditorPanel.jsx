import React, { useEffect, useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import Confetti from 'react-confetti';

// --- Paste your RapidAPI Key here (used only for RapidAPI primary) ---
const JUDGE0_API_KEY = '361b986753msh2c6ad4f74cac7a7p1c697cjsn4545e932b1d3';
// ------------------------------------

// Primary (RapidAPI) + Backup (public CE)
const PRIMARY_BASE = 'https://judge0-ce.p.rapidapi.com';
const BACKUP_BASE  = 'https://ce.judge0.com'; // no key needed, lower rate limits
const JUDGE0_API_HOST = 'judge0-ce.p.rapidapi.com';

// Safely pretty-print testcase input on the UI
const formatInputForDisplay = (input, problemId) => {
  if (!input) return { 'Input:': 'N/A' };
  const lines = input.split('\n');
  switch (problemId) {
    case 'two-sum': return { 'nums =': `[${lines[0]}]`, 'target =': lines[1] };
    case 'reverse-string': return { 's =': `["${lines[0].split(' ').join('", "')}"]` };
    case 'palindrome-number': return { 'x =': lines[0] };
    case 'remove-duplicates': return { 'nums =': `[${lines[0]}]` };
    case 'valid-parentheses': return { 's =': `"${lines[0]}"` };
    case 'group-anagrams': return { 'strs =': lines[0] };
    case 'product-of-array-except-self': return { 'nums =': lines[0] };
    case 'longest-substring': return { 's =': `"${lines[0]}"` };
    case 'trapping-rain-water': return { 'height =': lines[0] };
    case 'median-of-two-sorted-arrays': return { 'nums1 =': lines[0], 'nums2 =': lines[1] };
    case 'word-search': return { 'board =': lines[0], 'word =': lines[1] };
    default: return { 'Input:': input };
  }
};

// ---- helpers: robust network handling ----
async function parseJsonSafe(response) {
  const text = await response.text(); // read once
  try {
    return JSON.parse(text);
  } catch {
    const snippet = text.slice(0, 300).replace(/\s+/g, ' ');
    const status = `${response.status} ${response.statusText}`.trim();
    throw new Error(`Non-JSON from server (${status}). Body: ${snippet}`);
  }
}

function makeHeaders(isPrimary) {
  if (!isPrimary) return { 'content-type': 'application/json' };
  return {
    'content-type': 'application/json',
    'X-RapidAPI-Key': JUDGE0_API_KEY,
    'X-RapidAPI-Host': JUDGE0_API_HOST
  };
}

function EditorPanel({ problem }) {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(problem.starterCode?.javascript || '');
  const [isLoading, setIsLoading] = useState(false);

  const [activeTab, setActiveTab] = useState('testcase');
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const [submissionResults, setSubmissionResults] = useState(null);
  const [activeResultIndex, setActiveResultIndex] = useState(0);

  const [usingBackup, setUsingBackup] = useState(false); // 👈 show when we fell back

  // confetti (click-through + auto hide)
  const [showConfetti, setShowConfetti] = useState(false);
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [vh, setVh] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);
  const confettiTimerRef = useRef(null);

  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    // reset when switching problems
    setSelectedLanguage('javascript');
    setCode(problem.starterCode?.javascript || '');
    setSubmissionResults(null);
    setActiveTab('testcase');
    setActiveCaseIndex(0);
    setActiveResultIndex(0);
    setShowConfetti(false);
    setUsingBackup(false);
    if (confettiTimerRef.current) {
      clearTimeout(confettiTimerRef.current);
      confettiTimerRef.current = null;
    }
  }, [problem]);

  useEffect(() => () => {
    if (confettiTimerRef.current) clearTimeout(confettiTimerRef.current);
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(problem.starterCode?.[newLang] || '');
    setSubmissionResults(null);
    setActiveTab('testcase');
    setActiveCaseIndex(0);
    setActiveResultIndex(0);
    setShowConfetti(false);
    // keep usingBackup as is (per session), or reset:
    // setUsingBackup(false);
    if (confettiTimerRef.current) {
      clearTimeout(confettiTimerRef.current);
      confettiTimerRef.current = null;
    }
  };

  // Poll with backoff + robust error surface; respects base URL in use
  const pollForResult = async (token, isPrimary) => {
    const base = isPrimary ? PRIMARY_BASE : BACKUP_BASE;
    const headers = isPrimary
      ? { 'X-RapidAPI-Key': JUDGE0_API_KEY, 'X-RapidAPI-Host': JUDGE0_API_HOST }
      : undefined;

    let attempts = 0;
    while (true) {
      try {
        const res = await fetch(
          `${base}/submissions/${token}?base64_encoded=false&fields=*`,
          { method: 'GET', headers }
        );

        if (!res.ok) {
          attempts++;
          if (attempts <= 5) {
            await new Promise(r => setTimeout(r, 800 * attempts)); // small backoff
            continue;
          }
          await parseJsonSafe(res); // throws if HTML
        }

        const result = await parseJsonSafe(res);
        if (result?.status?.id <= 2) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        } else {
          return result;
        }
      } catch (error) {
        return { status: { description: 'Service Error' }, stderr: error.message };
      }
    }
  };

  // Try post to primary, else fallback to backup CE
  const submitBatch = async (submissions) => {
    // 1) Try RapidAPI primary
    try {
      const res = await fetch(
        `${PRIMARY_BASE}/submissions/batch?base64_encoded=false`,
        {
          method: 'POST',
          headers: makeHeaders(true),
          body: JSON.stringify({ submissions })
        }
      );

      if (!res.ok) {
        const data = await parseJsonSafe(res); // throws if HTML
        const msg = data?.error || data?.message || res.statusText;
        throw new Error(`RapidAPI error (${res.status}): ${msg}`);
      }

      const data = await parseJsonSafe(res);
      return { data, isPrimary: true };
    } catch (err) {
      // 2) Fallback to public CE
      try {
        const res2 = await fetch(
          `${BACKUP_BASE}/submissions/batch?base64_encoded=false`,
          {
            method: 'POST',
            headers: makeHeaders(false),
            body: JSON.stringify({ submissions })
          }
        );

        if (!res2.ok) {
          const data2 = await parseJsonSafe(res2); // throws if HTML
          const msg2 = data2?.error || data2?.message || res2.statusText;
          throw new Error(`Backup error (${res2.status}): ${msg2}`);
        }

        const data2 = await parseJsonSafe(res2);
        return { data: data2, isPrimary: false };
      } catch (err2) {
        // Bubble a single error up
        throw new Error(`${err.message} | ${err2.message}`);
      }
    }
  };

  const handleSubmit = async () => {
    if (!problem.driverCode?.[selectedLanguage] || Object.keys(problem.driverCode).length === 0) {
      alert(`Execution for ${selectedLanguage} is not configured for this problem yet.`);
      return;
    }

    setIsLoading(true);
    setSubmissionResults(null);
    setShowConfetti(false);
    setActiveTab('result');
    setActiveResultIndex(0);

    const driver = problem.driverCode[selectedLanguage];
    const fullCode = driver
      .replace('// __USER_CODE_HERE__', code)
      .replace('# __USER_CODE_HERE__', code);

    const submissions = problem.testCases.map(tc => ({
      source_code: fullCode,
      language_id: problem.languageIds[selectedLanguage],
      stdin: tc.input,
      expected_output: tc.expected
    }));

    try {
      const { data, isPrimary } = await submitBatch(submissions);
      setUsingBackup(!isPrimary);

      const tokenObjs = Array.isArray(data) ? data : (data.tokens || data.submissions || []);
      if (!Array.isArray(tokenObjs) || tokenObjs.length === 0 || tokenObjs.some(t => !t.token)) {
        throw new Error("Failed to create submissions. This might be a compile error. Please check your code's syntax.");
      }

      const results = await Promise.all(tokenObjs.map(t => pollForResult(t.token, isPrimary)));
      setSubmissionResults(results);

      const allAccepted = results.every(r => r && r.status?.description === 'Accepted');
      if (allAccepted) {
        setShowConfetti(true);
        if (confettiTimerRef.current) clearTimeout(confettiTimerRef.current);
        confettiTimerRef.current = setTimeout(() => setShowConfetti(false), 2500);
      }

      const firstFailedIndex = results.findIndex(r => r?.status?.description !== 'Accepted');
      setActiveResultIndex(firstFailedIndex !== -1 ? firstFailedIndex : 0);
    } catch (err) {
      setSubmissionResults([{ status: { description: 'Service Error' }, stderr: err.message }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Overall verdict banner message
  const getOverallStatus = () => {
    if (!submissionResults) return { message: '', className: '' };

    if (usingBackup) {
      return { message: 'Primary judge down — using backup (rate-limited)', className: 'final-verdict-rejected' };
    }
    if (submissionResults.some(r => (r?.status?.description || '').toLowerCase().includes('service'))) {
      return { message: 'Judge service error — please try again shortly', className: 'final-verdict-rejected' };
    }

    const allAccepted = submissionResults.every(r => r && r.status?.description === 'Accepted');
    if (allAccepted) return { message: 'All tests passed!', className: 'final-verdict-accepted' };

    const compileError = submissionResults.find(r => r?.status?.description === 'Compilation Error');
    if (compileError) return { message: 'Compilation Error', className: 'final-verdict-rejected' };

    const runtimeError = submissionResults.find(r => (r?.status?.id ?? 0) > 4);
    if (runtimeError) return { message: runtimeError.status.description, className: 'final-verdict-rejected' };

    return { message: 'Wrong Answer', className: 'final-verdict-rejected' };
  };

  const overallStatus = getOverallStatus();

  return (
    <div className="editor-panel-container">
      <div className="card">
        <div className="panel-header">
          <h4>Code Editor</h4>
          <div className="editor-controls">
            <select
              className="language-select"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              disabled={isLoading}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
            <button className="btn btn-submit" onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Judging...' : 'Submit'}
            </button>
          </div>
        </div>

        <div className="code-area">
          <Editor
            height="300px"
            language={selectedLanguage}
            value={code}
            onChange={(value) => setCode(value ?? '')}
            theme="vs-light"
            options={{ minimap: { enabled: false }, fontSize: 14 }}
          />
        </div>
      </div>

      <div className="card">
        {/* Confetti that does NOT block clicks */}
        {showConfetti && (
          <Confetti
            width={vw}
            height={vh}
            recycle={false}
            numberOfPieces={300}
            style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 1 }}
          />
        )}

        <div className="tabs-container">
          <button
            className={`main-tab ${activeTab === 'testcase' ? 'active' : ''}`}
            onClick={() => setActiveTab('testcase')}
          >
            Testcase
          </button>
          <button
            className={`main-tab ${activeTab === 'result' ? 'active' : ''}`}
            onClick={() => setActiveTab('result')}
          >
            Test Result
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'testcase' && (
            <div>
              <div className="case-selectors">
                {problem.testCases.map((_, index) => (
                  <button
                    key={index}
                    className={`case-btn ${activeCaseIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveCaseIndex(index)}
                  >
                    Case {index + 1}
                  </button>
                ))}
              </div>
              <div className="case-details">
                {problem.testCases.length > 0 ? (
                  Object.entries(formatInputForDisplay(problem.testCases[activeCaseIndex].input, problem.id)).map(([key, value]) => (
                    <div key={key}>
                      <p className="case-input-label">{key}</p>
                      <div className="case-input-value">{value}</div>
                    </div>
                  ))
                ) : (
                  <p>No test cases available for this problem yet.</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'result' && (
            <div>
              {isLoading && (
                <div className="no-result">
                  <div className="spinner"></div>
                  <p>Judging your code...</p>
                </div>
              )}

              {!isLoading && Array.isArray(submissionResults) && submissionResults.length > 0 && (
                <div className="submission-results-container">
                  <h3 className={`final-verdict ${overallStatus.className}`}>
                    {overallStatus.message}
                  </h3>

                  <div className="result-tabs">
                    {submissionResults.map((result, index) => {
                      const isAccepted = result?.status?.description === 'Accepted';
                      return (
                        <button
                          key={index}
                          className={`result-tab ${isAccepted ? 'accepted' : 'rejected'} ${activeResultIndex === index ? 'active' : ''}`}
                          onClick={() => setActiveResultIndex(index)}
                        >
                          <span className="icon">{isAccepted ? '✅' : '❌'}</span>
                          Case {index + 1}
                        </button>
                      );
                    })}
                  </div>

                  {submissionResults[activeResultIndex] && (
                    <div className="result-details-grid">
                      <div className="detail-section">
                        <label>Input</label>
                        <pre>{problem.testCases[activeResultIndex]?.input ?? 'N/A'}</pre>
                      </div>
                      <div className="detail-section">
                        <label>Your Output</label>
                        <pre className={
                          submissionResults[activeResultIndex]?.status?.description === 'Accepted'
                            ? 'text-green'
                            : 'text-red'
                        }>
                          {submissionResults[activeResultIndex]?.stdout
                            || submissionResults[activeResultIndex]?.stderr
                            || submissionResults[activeResultIndex]?.compile_output
                            || 'No output'}
                        </pre>
                      </div>
                      <div className="detail-section">
                        <label>Expected Output</label>
                        <pre>{problem.testCases[activeResultIndex]?.expected ?? 'N/A'}</pre>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {!isLoading && (!submissionResults || submissionResults.length === 0) && (
                <div className="no-result">
                  <span className="no-result-icon">🚀</span>
                  <h4>Ready to submit your code?</h4>
                  <p>Click "Submit" to run against all test cases!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditorPanel;
