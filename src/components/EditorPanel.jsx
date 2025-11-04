import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import Confetti from 'react-confetti';

// --- Constants ---
// !!! IMPORTANT: Replace with your actual RapidAPI Key !!!
const JUDGE0_API_KEY = 'PASTE_YOUR_RAPIDAPI_KEY_HERE';
// ---------------------------------------------------------
const PRIMARY_BASE = 'https://judge0-ce.p.rapidapi.com';
const BACKUP_BASE = 'https://ce.judge0.com';
const JUDGE0_API_HOST = 'judge0-ce.p.rapidapi.com';

// --- Helper Functions ---

// Safely pretty-print testcase input on the UI
const formatInputForDisplay = (input, problemId) => {
    if (!input) return { 'Input:': 'N/A' };
    const lines = input.split('\n');
    // Ensure this switch statement includes ALL your problem IDs
    switch (problemId) {
        case 'two-sum': return { 'nums =': `[${lines[0]}]`, 'target =': lines[1] };
        case 'reverse-string': return { 's =': `["${lines[0].split(' ').join('", "')}"]` };
        case 'palindrome-number': return { 'x =': lines[0] };
        case 'valid-parentheses': return { 's =': `"${lines[0]}"` };
        case 'longest-substring': return { 's =': `"${lines[0]}"` };
        case 'group-anagrams': return { 'strs =': lines[0] }; // Assumes input is JSON string array
        case 'product-of-array-except-self': return { 'nums =': lines[0] }; // Assumes input is JSON string array
        case 'trapping-rain-water': return { 'height =': lines[0] }; // Assumes input is JSON string array
        case 'median-of-two-sorted-arrays': return { 'nums1 =': lines[0], 'nums2 =': lines[1] }; // Assumes JSON arrays
        case 'word-search': return { 'board =': lines[0], 'word =': lines[1] }; // Assumes board is JSON string
        case 'valid-anagram': return { 's =': lines[0], 't =': lines[1] };
        case 'rotate-image': return { 'matrix =': lines[0] }; // Assumes input is JSON string matrix
        case 'largest-rectangle-in-histogram': return { 'heights =': lines[0] }; // Assumes JSON array
        case 'merge-k-sorted-lists': return { 'lists =': lines[0] }; // Assumes JSON array of arrays
        case 'regular-expression-matching': return { 's =': lines[0], 'p =': lines[1] };
        case 'contains-duplicate': return { 'nums =': `[${lines[0]}]` }; // Space separated numbers
        case 'climbing-stairs': return { 'n =': lines[0] };
        case 'binary-tree-level-order-traversal': return { 'root =': `[${lines[0]}]` }; // Space separated values/nulls
        case 'coin-change': return { 'coins =': `[${lines[0]}]`, 'amount =': lines[1] }; // Space separated coins
        case 'sliding-window-maximum': return { 'nums =': `[${lines[0]}]`, 'k =': lines[1] }; // Space separated nums
        case 'best-time-to-buy-and-sell-stock': return { 'prices =': `[${lines[0]}]` }; // Space separated prices
        case 'linked-list-cycle': return { 'head =': `[${lines[0]}]`, 'pos =': lines[1] }; // Space separated vals
        case 'longest-palindromic-substring': return { 's =': `"${lines[0]}"` };
        case 'number-of-islands': return { 'grid =': lines[0] }; // Assumes JSON string matrix
        case 'word-break-ii': return { 's =': lines[0], 'wordDict =': lines[1] }; // Assumes wordDict is JSON string array
        case 'invert-binary-tree': return { 'root =': `[${lines[0]}]` }; // Space separated values/nulls
        case 'merge-sorted-array': {
           // Special handling for the M and N at the end
           const nums1_m = lines[0].split(' '); const m = nums1_m.pop();
           const nums2_n = lines[1].split(' '); const n = nums2_n.pop();
           return { 'nums1 =': `[${nums1_m.join(',')}]`, 'm =': m, 'nums2 =': `[${nums2_n.join(',')}]`, 'n =': n };
        }
        case 'remove-duplicates-from-sorted-list': return { 'head =': `[${lines[0]}]` }; // Space separated vals
        case 'subsets': return { 'nums =': `[${lines[0]}]` }; // Space separated nums
        case 'kth-largest-element-in-an-array': return { 'nums =': `[${lines[0]}]`, 'k =': lines[1] }; // Space separated nums
        case 'combination-sum': return { 'candidates =': `[${lines[0]}]`, 'target =': lines[1] }; // Space separated candidates
        case 'spiral-matrix': return { 'matrix =': lines[0] }; // Assumes JSON string matrix
        case 'edit-distance': return { 'word1 =': lines[0], 'word2 =': lines[1] };
        case 'serialize-and-deserialize-binary-tree': return { 'root =': `[${lines[0]}]` }; // Space separated values/nulls
        case 'n-queens': return { 'n =': lines[0] };
        // Add more cases here for new problems
        default: return { 'Input:': lines.join('\n') }; // Default for multi-line or unknown
    }
};

async function parseJsonSafe(response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (e) {
    // Log the error and the text snippet for debugging
    console.error("Failed to parse JSON:", e);
    console.error("Response Text Snippet:", text.slice(0, 500));
    const snippet = text.slice(0, 300).replace(/\s+/g, ' ');
    const status = `${response.status} ${response.statusText}`.trim();
    // Throw a more informative error
    throw new Error(`Non-JSON received from server (${status}). Check console for Response Text Snippet.`);
  }
}


function makeHeaders(isPrimary) {
  // Use API Key only if it's provided and we are using the primary endpoint
  const useKey = isPrimary && JUDGE0_API_KEY && JUDGE0_API_KEY !== 'PASTE_YOUR_RAPIDAPI_KEY_HERE';
  if (useKey) {
      return {
          'content-type': 'application/json',
          'X-RapidAPI-Key': JUDGE0_API_KEY,
          'X-RapidAPI-Host': JUDGE0_API_HOST
      };
  }
  // No key needed for backup or if primary key is missing/placeholder
  return { 'content-type': 'application/json' };
}

// Poll with backoff + robust error surface; respects base URL in use
const pollForResult = async (token, isPrimary) => {
    // Determine the base URL dynamically based on key presence and primary flag
    const usePrimaryUrl = isPrimary && JUDGE0_API_KEY && JUDGE0_API_KEY !== 'PASTE_YOUR_RAPIDAPI_KEY_HERE';
    const base = usePrimaryUrl ? PRIMARY_BASE : BACKUP_BASE;
    const headers = makeHeaders(usePrimaryUrl); // Generate headers for the actual base being used

    let attempts = 0;
    const maxAttempts = 8; // Poll for ~10 seconds total with backoff
    let delay = 500; // Initial delay 0.5s

    console.log(`Polling token ${token} on ${base}`); // Log polling start

    while (attempts < maxAttempts) {
      try {
        await new Promise(resolve => setTimeout(resolve, delay)); // Wait before polling
        const res = await fetch(
          `${base}/submissions/${token}?base64_encoded=false&fields=*`,
          { method: 'GET', headers }
        );

        // Try to parse JSON regardless of res.ok to get potential error messages
        const result = await parseJsonSafe(res);

        if (!res.ok) {
           // If server explicitly returns error status after processing (e.g., compile error finished)
           if (result?.status?.id > 2) {
               console.log(`Polling ${token}: Received final error status ${result?.status?.id} from server.`);
               return result;
           }
           // Otherwise, it's likely a temporary issue or rate limit on the API endpoint itself
           console.warn(`Polling ${token}: HTTP error ${res.status} (${res.statusText}). Retrying...`);
           // Throw to trigger retry logic below
           throw new Error(`Polling HTTP error (${res.status}): ${result?.message || result?.error || res.statusText}`);
        }

        if (result?.status?.id <= 2) { // In Queue or Processing
          console.log(`Polling ${token}: Status ${result?.status?.description || result?.status?.id}. Waiting...`);
          attempts++;
          delay = Math.min(delay + 300, 2000); // Increase delay, max 2s
        } else { // Finished (Accepted, WA, TLE, etc.)
          console.log(`Polling ${token}: Received final status ${result?.status?.description || result?.status?.id}`);
          return result;
        }
      } catch (error) {
        // Network error, JSON parsing error, or thrown HTTP error
        console.error(`Polling ${token}: Attempt ${attempts + 1} failed:`, error.message);
        attempts++; // Count as an attempt
        delay = Math.min(delay + 500, 2500); // Increase delay more on error, max 2.5s

        if (attempts >= maxAttempts) { // Last attempt failed
            console.error(`Polling ${token}: Max attempts reached. Returning error.`);
            // Return a structured error
            return {
                status: { id: -1, description: 'Polling Timeout/Error' }, // Use a custom status ID if needed
                stderr: `Failed to get result after ${maxAttempts} attempts. Last error: ${error.message}`
            };
        }
      }
    }
     // Should ideally not be reached if loop/attempt logic is correct
     console.error(`Polling ${token}: Polling loop finished unexpectedly. Returning timeout.`);
     return {
        status: { id: -1, description: 'Polling Timeout' },
        stderr: `Polling failed unexpectedly after ${maxAttempts} attempts.`
     };
  };


// Try post to primary, else fallback to backup CE
const submitBatch = async (submissions) => {
    let responseData = null;
    let isPrimaryUsed = false;
    const usePrimary = JUDGE0_API_KEY && JUDGE0_API_KEY !== 'PASTE_YOUR_RAPIDAPI_KEY_HERE';

    // 1) Try RapidAPI primary IF key exists
    if (usePrimary) {
        try {
          console.log("Attempting Primary API...");
          const res = await fetch(
            `${PRIMARY_BASE}/submissions/batch?base64_encoded=false`,
            {
              method: 'POST',
              headers: makeHeaders(true),
              body: JSON.stringify({ submissions })
            }
          );
          responseData = await parseJsonSafe(res);
          if (!res.ok) {
            const msg = responseData?.error || responseData?.message || res.statusText || 'Unknown RapidAPI Error';
            throw new Error(`RapidAPI Error (${res.status}): ${msg}`);
          }
          // Check if responseData is an array of tokens
          if (!Array.isArray(responseData)) {
              // Handle potential single object error response from RapidAPI gateway itself
              if (responseData.message) throw new Error(`RapidAPI Gateway Error: ${responseData.message}`);
              throw new Error('Unexpected non-array response from Primary API batch endpoint.');
          }
          isPrimaryUsed = true;
          console.log("Using Primary API successful.");
          return { data: responseData, isPrimary: isPrimaryUsed };
        } catch (err) {
          console.warn("Primary API failed, falling back to backup:", err.message);
          // Fall through to backup
        }
    } else {
        console.log("Skipping Primary API (no valid key provided).");
    }

    // 2) Use public CE (Backup or if no key)
    try {
        console.log("Attempting Backup API...");
        const res2 = await fetch(
          `${BACKUP_BASE}/submissions/batch?base64_encoded=false`,
          {
            method: 'POST',
            headers: makeHeaders(false),
            body: JSON.stringify({ submissions })
          }
        );
        const responseData2 = await parseJsonSafe(res2);
        if (!res2.ok) {
          const msg2 = responseData2?.error || responseData2?.message || res2.statusText || 'Unknown Backup API Error';
          throw new Error(`Backup API Error (${res2.status}): ${msg2}`);
        }
         if (!Array.isArray(responseData2)) {
              if (responseData2.message) throw new Error(`Backup API Error: ${responseData2.message}`);
              throw new Error('Unexpected non-array response from Backup API batch endpoint.');
          }
        isPrimaryUsed = false; // Definitely not primary if we reach here
        console.log("Using Backup API successful.");
        return { data: responseData2, isPrimary: isPrimaryUsed };
      } catch (err2) {
        console.error("Backup API also failed:", err2.message);
        // Throw the most relevant error (backup error, or primary if backup wasn't tried)
        throw new Error(`Judge0 API Error: ${err2.message}`);
      }
  };
// --- End Helpers ---


// --- EditorPanel Component ---
function EditorPanel({ problem, showSuccessFeedback }) {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState('testcase');
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [submissionResults, setSubmissionResults] = useState(null);
  const [activeResultIndex, setActiveResultIndex] = useState(0);
  const [usingBackup, setUsingBackup] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [vh, setVh] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);
  const confettiTimerRef = useRef(null);

  useEffect(() => {
    // Reset state fully when the problem prop changes
    console.log("Problem changed:", problem?.id);
    // Set language first if needed, though subsequent effect handles code
    // setSelectedLanguage('javascript'); // Or remember last used?
    setCode(problem.starterCode?.[selectedLanguage] || '');
    setSubmissionResults(null);
    setActiveTab('testcase');
    setActiveCaseIndex(0);
    setActiveResultIndex(0);
    setShowConfetti(false);
    setUsingBackup(false);
    setIsLoadingSubmit(false);
    setIsRunning(false);
    if (confettiTimerRef.current) {
      clearTimeout(confettiTimerRef.current);
      confettiTimerRef.current = null;
    }
  }, [problem]); // Effect only depends on problem

  useEffect(() => {
    // Update code based on selected language for the CURRENT problem
    // Also clear results when language changes
    console.log("Language changed:", selectedLanguage);
    setCode(problem.starterCode?.[selectedLanguage] || '');
    setSubmissionResults(null);
    setActiveTab('testcase');
  }, [selectedLanguage, problem]); // Rerun if language OR problem changes

  useEffect(() => { /* Resize listener */
    const onResize = () => { setVw(window.innerWidth); setVh(window.innerHeight); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => () => { /* Cleanup timer */
    if (confettiTimerRef.current) clearTimeout(confettiTimerRef.current);
  }, []);


  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  // --- Core Execution Logic ---
  const executeCode = async (showResultsInPanel) => {
    if (!problem.driverCode?.[selectedLanguage] || !problem.languageIds?.[selectedLanguage]) {
      alert(`Execution for ${selectedLanguage} not configured.`); return null;
    }
    if (problem.testCases.length === 0) {
      alert('No test cases available.'); return null;
    }

    // Clear previous results ONLY if we intend to show new ones in the panel
    // Or if it's a submit action (always clear before submit)
    if (showResultsInPanel || !showResultsInPanel /* isSubmit */) {
        setSubmissionResults(null);
    }
    setShowConfetti(false);
    setActiveTab('result'); // Switch to result tab to show loading
    setActiveResultIndex(0); // Reset view

    const driver = problem.driverCode[selectedLanguage];
    const fullCode = driver
      .replace('// __USER_CODE_HERE__', code)
      .replace('# __USER_CODE_HERE__', code);

    // Ensure language ID exists
    const languageId = problem.languageIds[selectedLanguage];
    if (!languageId) {
        alert(`Language ID for ${selectedLanguage} is not defined for this problem.`);
        return null;
    }

    const submissions = problem.testCases.map(tc => ({
      source_code: fullCode,
      language_id: languageId,
      stdin: tc.input,
      expected_output: tc.expected
    }));

    try {
      const { data, isPrimary } = await submitBatch(submissions);
      setUsingBackup(!isPrimary); // Track which API was used
      const tokenObjs = Array.isArray(data) ? data : (data.tokens || data.submissions || []);

       // Handle cases where token creation failed (e.g., API key issue, immediate compile error response)
       if (!Array.isArray(tokenObjs) || tokenObjs.length === 0) {
           // Check if 'data' itself contains error info
           if (data && (data.error || data.message)) {
               throw new Error(`API Error on submission creation: ${data.error || data.message}`);
           }
           throw new Error("Failed to create any submissions. Check API status/key or code syntax.");
       }

       // Check if only one result came back indicating immediate compile error
       if (tokenObjs.length === 1 && tokenObjs[0].status?.description === 'Compilation Error') {
            console.error("Compile Error on batch submission:", tokenObjs[0]);
            // Pad results to match test case count, marking others as skipped/error
            const compileErrorResult = tokenObjs[0];
            const paddedResults = problem.testCases.map((_, idx) =>
                idx === 0 ? compileErrorResult : { status: { description: 'Skipped' }, stderr: 'Skipped due to compilation error.' }
            );
            return paddedResults;
       }

       // If some tokens were created, but not all (potential compile error detected later)
       if (tokenObjs.length !== submissions.length) {
           console.warn(`Expected ${submissions.length} tokens, received ${tokenObjs.length}. May indicate compile error.`);
       }


      // Filter out potential null/invalid tokens before polling
      const validTokenObjs = tokenObjs.filter(t => t && t.token);
      if (validTokenObjs.length === 0) {
           // If we got responses but none had a token, assume compile error wasn't caught earlier
           console.error("Received responses but no valid submission tokens.", tokenObjs);
           // Try to find an error message in the responses
           const firstError = tokenObjs.find(t => t.compile_output || t.stderr || t.message);
           if (firstError) {
               return [{ status: { description: 'Compilation Error' }, stderr: firstError.compile_output || firstError.stderr || firstError.message }];
           }
          throw new Error("No valid submission tokens received. Check code syntax for compile errors.");
      }

      console.log(`Polling ${validTokenObjs.length} valid tokens...`);
      const results = await Promise.all(validTokenObjs.map(t => pollForResult(t.token, isPrimary)));

      // If polling returns fewer results than valid tokens (shouldn't happen with good polling), pad with errors
      while (results.length < problem.testCases.length) { // Pad up to total test cases
          results.push({ status: { description: 'Submission Error' }, stderr: 'Could not retrieve result for this case.' });
      }

      return results;

    } catch (err) {
      console.error("Error during code execution pipeline:", err);
      // Return error structure matching expected results format
       const errorMessage = err.message || 'An unknown error occurred during execution.';
       // Create an array with the error for all test cases for consistency in display
       return problem.testCases.map(() => ({
            status: { description: errorMessage.includes('Compile') || errorMessage.includes('syntax') ? 'Compilation Error' : 'Service Error' },
            stderr: errorMessage
        }));
    }
  };


  // --- handleRun ---
  const handleRun = async () => {
    console.log("Run clicked");
    setIsRunning(true);
    setSubmissionResults(null); // Clear previous results specifically for run
    const results = await executeCode(true); // Execute and show results in panel
    if (results) {
        console.log("Run results:", results);
        setSubmissionResults(results); // Display results
        const firstFailedIndex = results.findIndex(r => r?.status?.description !== 'Accepted');
        setActiveResultIndex(firstFailedIndex !== -1 ? firstFailedIndex : 0);
    } else {
        console.log("executeCode returned null for Run");
        setActiveTab('testcase'); // Go back if run couldn't start
    }
    setIsRunning(false);
  };

  // --- handleSubmit ---
  const handleSubmit = async () => {
    console.log("Submit clicked");
    setIsLoadingSubmit(true);
    setSubmissionResults(null); // Clear previous results specifically for submit
    const results = await executeCode(false); // Execute but don't immediately plan to show results

    if (!results) {
        console.log("executeCode returned null for Submit");
        setIsLoadingSubmit(false);
        setActiveTab('testcase');
        return;
    }

    console.log("Submit results:", results);
    // Ensure every result is valid and check description
    const allAccepted = results.every(r => r && r.status?.description === 'Accepted');

    if (allAccepted) {
        console.log("Submit successful!");
        let maxTime = 0; let maxMemoryKB = 0;
        results.forEach(r => {
            if(r?.time) maxTime = Math.max(maxTime, parseFloat(r.time));
            if(r?.memory) maxMemoryKB = Math.max(maxMemoryKB, r.memory);
        });
        if(typeof showSuccessFeedback === 'function') {
           showSuccessFeedback({ maxTime: maxTime, maxMemory: maxMemoryKB / 1024 });
        } else {
            console.warn("showSuccessFeedback function not passed to EditorPanel");
        }
        setShowConfetti(true);
        if (confettiTimerRef.current) clearTimeout(confettiTimerRef.current);
        confettiTimerRef.current = setTimeout(() => setShowConfetti(false), 3500);
        setSubmissionResults(null); // Clear results panel on success

    } else { // FAILURE -> Show results in the bottom panel
        console.log("Submit failed.");
        setSubmissionResults(results);
        const firstFailedIndex = results.findIndex(r => !r || r.status?.description !== 'Accepted');
        setActiveResultIndex(firstFailedIndex !== -1 ? firstFailedIndex : 0);
        setActiveTab('result'); // Ensure result tab is active
    }
    setIsLoadingSubmit(false);
  };


  // --- getOverallStatus ---
  const getOverallStatus = () => {
    if (!submissionResults || submissionResults.length === 0) return { message: '', className: '' };
    // Prioritize showing backup warning if applicable
    if (usingBackup) return { message: 'Primary judge down — using backup', className: 'final-verdict-rejected' };

    // Check for critical errors first (Compile, Service, Timeout) across all results
    const compileError = submissionResults.find(r => r?.status?.description === 'Compilation Error');
    if (compileError) return { message: 'Compilation Error', className: 'final-verdict-rejected' };

    const serviceError = submissionResults.find(r => (r?.status?.description || '').toLowerCase().includes('service') || (r?.status?.description || '').toLowerCase().includes('error'));
     if (serviceError) return { message: serviceError.status.description, className: 'final-verdict-rejected' };

    const timeoutError = submissionResults.find(r => r?.status?.description === 'Polling Timeout' || r?.status?.description === 'Polling Timeout/Error');
     if (timeoutError) return { message: timeoutError.status.description, className: 'final-verdict-rejected' };


    // If no critical errors, check if all passed
    const allAccepted = submissionResults.every(r => r && r.status?.description === 'Accepted');
    if (allAccepted) return { message: 'All tests passed!', className: 'final-verdict-accepted' }; // For successful 'Run'

    // Find the first non-Accepted status (WA, TLE, Runtime Error, Missing)
    const firstFailedResult = submissionResults.find(r => !r || r.status?.description !== 'Accepted');
     if (firstFailedResult) {
         // Provide a more specific message if available
         return { message: firstFailedResult.status?.description || 'Error', className: 'final-verdict-rejected' };
     }

    // Fallback if somehow no failure was found but not all accepted (shouldn't happen)
    return { message: 'Wrong Answer', className: 'final-verdict-rejected' };
  };
  const overallStatus = getOverallStatus();


  return (
    <div className="editor-panel-container">
      {/* --- Editor Card --- */}
      <div className="card">
        <div className="panel-header">
          <h4>Code Editor</h4>
          <div className="editor-controls">
             <select className="language-select" value={selectedLanguage} onChange={handleLanguageChange} disabled={isLoadingSubmit || isRunning}>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
            <button className="btn btn-run" onClick={handleRun} disabled={isLoadingSubmit || isRunning || !problem || problem.testCases.length === 0}>
              {isRunning ? 'Running...' : 'Run'}
            </button>
            <button className="btn btn-submit" onClick={handleSubmit} disabled={isLoadingSubmit || isRunning || !problem || problem.testCases.length === 0}>
              {isLoadingSubmit ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
        <div className="code-area">
          <Editor
              height="35vh" // Adjust height as needed
              language={selectedLanguage}
              value={code} // Ensure value is controlled
              onChange={(value) => setCode(value ?? '')}
              theme="vs-light" // Or 'vs-dark'
              options={{ minimap: { enabled: false }, fontSize: 14, wordWrap: 'on' }}
            />
        </div>
      </div>

      {/* --- Results Card --- */}
      <div className="card results-card">
        {/* Confetti should still work */}
        {showConfetti && ( <Confetti width={vw} height={vh} recycle={false} numberOfPieces={300} style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 1000 }}/> )}

        <div className="tabs-container">
             <button className={`main-tab ${activeTab === 'testcase' ? 'active' : ''}`} onClick={() => setActiveTab('testcase')}>Testcase</button>
             <button className={`main-tab ${activeTab === 'result' ? 'active' : ''}`} onClick={() => setActiveTab('result')}>Test Result</button>
        </div>

        <div className="tab-content">
          {activeTab === 'testcase' && (
             <div>
                 <div className="case-selectors">
                     {problem?.testCases?.map((_, index) => ( // Add optional chaining
                        <button key={index} className={`case-btn ${activeCaseIndex === index ? 'active' : ''}`} onClick={() => setActiveCaseIndex(index)}> Case {index + 1} </button>
                     )) ?? <p>Loading test cases...</p>}
                 </div>
                 <div className="case-details">
                     {(problem?.testCases?.length ?? 0) > 0 ? (
                        Object.entries(formatInputForDisplay(problem.testCases[activeCaseIndex]?.input, problem.id)).map(([key, value]) => ( // Add optional chaining
                            <div key={key} className='case-input-section'> <p className="case-input-label">{key}</p> <div className="case-input-value">{value || 'N/A'}</div> </div>
                        ))
                      ) : ( <p>No test cases available.</p> )}
                 </div>
             </div>
          )}

          {activeTab === 'result' && (
             <div>
              {(isLoadingSubmit || isRunning) && ( <div className="no-result"><div className="spinner"></div><p>{isLoadingSubmit ? 'Judging submission...' : 'Running test cases...'}</p></div> )}

              {/* Display Run OR Failed Submit Results */}
              {!isLoadingSubmit && !isRunning && Array.isArray(submissionResults) && submissionResults.length > 0 && (
                 <div className="submission-results-container">
                    <h4 className={`final-verdict ${overallStatus.className}`}>
                        {overallStatus.message}
                    </h4>
                    <div className="result-tabs">
                        {submissionResults.map((result, index) => {
                             const statusDesc = result?.status?.description || 'Error';
                             const isAccepted = statusDesc === 'Accepted';
                             let buttonClass = 'rejected';
                             if (isAccepted) buttonClass = 'accepted';
                             else if (statusDesc.toLowerCase().includes('error') || statusDesc === 'Submission Missing' || statusDesc.startsWith('Polling')) buttonClass = 'error'; // Add error class

                             return (
                                 <button
                                     key={index}
                                     className={`result-tab ${buttonClass} ${activeResultIndex === index ? 'active' : ''}`}
                                     onClick={() => setActiveResultIndex(index)}
                                     title={statusDesc} // Add tooltip for status
                                 >
                                     <span className="icon">{isAccepted ? '✅' : '❌'}</span> Case {index + 1}
                                 </button>
                             );
                        })}
                    </div>
                    {/* Ensure submissionResults[activeResultIndex] exists before accessing its properties */}
                    {submissionResults[activeResultIndex] && problem?.testCases?.[activeResultIndex] && (
                        <div className="result-details-grid">
                             <div className="detail-section"><label>Input</label><pre>{problem.testCases[activeResultIndex]?.input ?? 'N/A'}</pre></div>
                             <div className="detail-section">
                                 <label>Your Output</label>
                                 <pre className={ submissionResults[activeResultIndex]?.status?.description === 'Accepted' ? 'text-green' : 'text-red' }>
                                     {/* Show stderr or compile_output clearly if present */}
                                     {submissionResults[activeResultIndex]?.stderr
                                        ? `Error: ${submissionResults[activeResultIndex].stderr}`
                                        : submissionResults[activeResultIndex]?.compile_output
                                        ? `Compile Output: ${submissionResults[activeResultIndex].compile_output}`
                                        : submissionResults[activeResultIndex]?.stdout || (submissionResults[activeResultIndex]?.status?.description === 'Accepted' ? '' : 'No output')}
                                 </pre>
                             </div>
                             <div className="detail-section"><label>Expected Output</label><pre>{problem.testCases[activeResultIndex]?.expected ?? 'N/A'}</pre></div>
                             <div className="detail-section performance-metrics">
                                <span>Time: {submissionResults[activeResultIndex].time ? `${submissionResults[activeResultIndex].time}s` : '-'}</span>
                                <span>Memory: {submissionResults[activeResultIndex].memory ? `${(submissionResults[activeResultIndex].memory / 1024).toFixed(1)}MB` : '-'}</span>
                            </div>
                        </div>
                    )}
                     {/* Add message if selected result index is invalid */}
                     {(!submissionResults[activeResultIndex] || !problem?.testCases?.[activeResultIndex]) && <p>Could not load details for this case.</p>}
                 </div>
              )}

              {/* Initial State / Placeholder after Successful Submit */}
              {!isLoadingSubmit && !isRunning && (!submissionResults || submissionResults.length === 0) && (
                <div className="no-result">
                   <span className="no-result-icon">▶️</span>
                   <h4>Run or Submit your code</h4>
                   <p>Click "Run" to test against all cases, or "Submit" for final verification.</p>
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