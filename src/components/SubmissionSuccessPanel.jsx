import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../SubmissionSuccessPanel.css'; // Import the CSS for styling

const CheckmarkIcon = () => (
  <svg className="verdict-icon-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="25" fill="none" stroke="#4CAF50" strokeWidth="3" />
    <path fill="none" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M14 27l8 8 16-16" />
  </svg>
);

function SubmissionSuccessPanel({ problem, performance, onViewProblemDescription }) {

  // ✅ Save solved problem to localStorage
  useEffect(() => {
    if (!problem?.title) return;

    const solved = JSON.parse(localStorage.getItem('solvedProblems')) || [];

    // only add if not already solved
    if (!solved.includes(problem.title)) {
      solved.push(problem.title);
      localStorage.setItem('solvedProblems', JSON.stringify(solved));
    }
  }, [problem]);

  let efficiencyFeedback = { icon: '👍', text: 'Passed all test cases!' };
  if (performance && problem?.targetTimeSeconds != null && problem?.expectedComplexity) {
    if (performance.maxTime <= problem.targetTimeSeconds * 0.75) {
      efficiencyFeedback = { icon: '✨', text: `Excellent! Meets optimal complexity (${problem.expectedComplexity}).` };
    } else if (performance.maxTime <= problem.targetTimeSeconds) {
      efficiencyFeedback = { icon: '👍', text: `Good job within the time limit! Optimal: ${problem.expectedComplexity}.` };
    } else {
      efficiencyFeedback = { icon: '🤔', text: `Passed, but could optimize for ${problem.expectedComplexity}.` };
    }
  }

  const handleChatbotClick = () => {
    alert("🤖 Let's analyze your code! Paste it below to see its Time & Space complexity 💫");
  };

  return (
    <div className="submission-success-panel card">

      {/* Verdict Section */}
      <div className="verdict-section">
        <CheckmarkIcon />
        <h2>Submission Accepted!</h2>
        <p>You passed all test cases. Well done!</p>
      </div>

      <hr className="divider" />

      {/* Performance Summary */}
      <div className="performance-section">
        <h3>Performance Summary</h3>
        <div className="metrics">
          <div>
            <span className="metric-value">{performance?.maxTime?.toFixed(2) ?? '-'} s</span>
            <span className="metric-label">Max Time</span>
          </div>
          <div>
            <span className="metric-value">{performance?.maxMemory?.toFixed(1) ?? '-'} MB</span>
            <span className="metric-label">Peak Memory</span>
          </div>
        </div>

        <hr className="subtle-hr" />
        <h4>Efficiency Feedback</h4>
        <div className="efficiency-feedback">
          <span className="feedback-icon">{efficiencyFeedback.icon}</span>
          <p>{efficiencyFeedback.text}</p>
        </div>
      </div>

      <hr className="divider" />

      {/* Next Steps */}
      <div className="next-steps-section">
        <h4>Level Up! 🚀</h4>
        <p>You crushed the test cases! Ready for the "boss level"? See how your code <em>really</em> performs.</p>
        <p>Pop it in the chatbot for an instant Time & Space report!</p>

        <button className="btn btn-primary btn-chatbot" onClick={handleChatbotClick}>
          🤖 Show Me the Report!
        </button>

        <div className="navigation-buttons">
          <Link to="/" className="btn btn-secondary">
            ← Back to Problem List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubmissionSuccessPanel;