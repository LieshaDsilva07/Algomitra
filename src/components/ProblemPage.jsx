import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { problems } from '../data/problems';
import ProblemStatement from './ProblemStatement';
import EditorPanel from './EditorPanel';

function ProblemPage() {
  const { id } = useParams();
  const problem = problems.find((p) => p.id === id);

  if (!problem) {
    return (
      <div className="not-found-container">
        <h2>Problem not found!</h2>
        <Link to="/">← Back to Problem List</Link>
      </div>
    );
  }

  return (
    <main className="page-container">
      <div className="left-panel">
        <ProblemStatement problem={problem} />
      </div>
      <div className="right-panel">
        <EditorPanel problem={problem} />
      </div>
    </main>
  );
}

export default ProblemPage;