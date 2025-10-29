import React from 'react';
import { Link } from 'react-router-dom';
// import { CONSTRAINTS_TIP } from '../data/constants'; // This was unused in the provided code

function ProblemStatement({ problem }) {
  const difficultyClasses = {
    Easy: 'badge-easy',
    Medium: 'badge-medium',
    Hard: 'badge-hard',
  };

  return (
    // 👇 This is the wrapper div that fixes the scrolling issue.
    <div className="problem-description-container">
      <div className="card">
        <div className="problem-header">
          <div>
            <h2>{problem.title}</h2>
            <p className="difficulty-subtitle">{problem.company}</p>
          </div>
          <span className={`difficulty-badge ${difficultyClasses[problem.difficulty]}`}>
            {problem.difficulty}
          </span>
        </div>

        <p className="description" dangerouslySetInnerHTML={{ __html: problem.description.replace(/`([^`]+)`/g, '<code>$1</code>') }} />

        <h3>Examples 📝</h3>
        {problem.examples.map((ex, index) => (
          <div key={index} className="example-card">
            <p><strong>Input:</strong> <code>{ex.input}</code></p>
            <p><strong>Output:</strong> <code>{ex.output}</code></p>
            {ex.explanation && <p><strong>Explanation:</strong> {ex.explanation}</p>}
          </div>
        ))}

        <h3>Constraints ⚠️</h3>
        {problem.constraints_tip && (
          <div className="constraints-box">
            <p>{problem.constraints_tip}</p>
          </div>
        )}
        <ul>
          {problem.constraints.map((c, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: c.replace(/`([^`]+)`/g, '<code>$1</code>') }} />
          ))}
        </ul>

        <div className="back-link-container">
          <Link to="/">← Back to Problem List</Link>
        </div>
      </div>
    </div>
  );
}

export default ProblemStatement;