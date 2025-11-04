import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'; 
import { problems } from '../data/problems';
import '../ProblemListPage.css';

const difficultyOptions = [
  { value: 'All', label: 'All Difficulties' },
  { value: 'Easy', label: 'Easy' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Hard', label: 'Hard' },
];

function ProblemListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficultyOption, setSelectedDifficultyOption] = useState(difficultyOptions[0]);
  const [selectedCompanyTag, setSelectedCompanyTag] = useState('All');

  // ✅ Track solved problems from localStorage
  const [solvedProblems, setSolvedProblems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('solvedProblems')) || [];
    setSolvedProblems(saved);
  }, []);

  const companyList = useMemo(() => {
    const companies = new Set(problems.map(p => p.company.trim()));
    return ['All', ...Array.from(companies).sort()];
  }, []);

  const filteredProblems = useMemo(() => {
    const difficultyValue = selectedDifficultyOption.value;
    const companyValue = selectedCompanyTag;

    return problems.filter(problem => {
      const titleMatch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
      const difficultyMatch = difficultyValue === 'All' || problem.difficulty === difficultyValue;
      const companyMatch = companyValue === 'All' || problem.company === companyValue;
      return titleMatch && difficultyMatch && companyMatch;
    });
  }, [searchTerm, selectedDifficultyOption, selectedCompanyTag]);

  return (
    <div className="list-page-container">
      <div className="list-page-controls-wrapper">
        <header className="list-page-header">
          <h1>AlgoMITra <span className="header-rocket-emoji" role="img" aria-label="rocket">🚀</span></h1>
          <p>Your DSA cheat sheet. Ethically, of course.</p>
        </header>

        <div className="filter-controls">
          <div className="search-input-wrapper">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="18"
              height="18"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search by problem name..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="select-filters">
            <Select
              className="filter-react-select-container"
              classNamePrefix="filter-react-select"
              options={difficultyOptions}
              value={selectedDifficultyOption}
              onChange={setSelectedDifficultyOption}
              isSearchable={false}
            />
          </div>
        </div>

        {/* --- Company Filter Tags --- */}
        <div className="company-tags-container">
          <span className="tags-label">Filter by Company:</span>
          <div className="tags-list">
            {companyList.map(company => (
              <button
                key={company}
                className={`company-tag ${selectedCompanyTag === company ? 'active' : ''}`}
                onClick={() => setSelectedCompanyTag(company)}
              >
                {company === 'All' ? 'All Companies' : company}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="problem-list-card">
        <div className="list-header">
          <div className="col-title">Problem</div>
          <div className="col-difficulty">Difficulty</div>
          <div className="col-company">Company</div>
        </div>

        <div className="list-body">
          {filteredProblems.length > 0 ? (
            filteredProblems.map((problem, index) => {
              const isSolved = solvedProblems.includes(problem.title);
              return (
                <Link
                  to={`/problems/${problem.id}`}
                  key={problem.id}
                  className={`problem-item ${isSolved ? 'solved-problem' : ''}`}
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <div className="col-title">
                    <span>{problem.title}</span>
                    {isSolved && <span className="solved-badge">✅ Solved</span>}
                  </div>
                  <div className="col-difficulty">
                    <span className={`difficulty-pill pill-${problem.difficulty.toLowerCase()}`}>
                      {problem.difficulty}
                    </span>
                  </div>
                  <div className="col-company"><span>{problem.company}</span></div>
                </Link>
              );
            })
          ) : (
            <div className="no-results-message">
              <p>🤔 No problems match your criteria. Try adjusting the filters!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProblemListPage;
