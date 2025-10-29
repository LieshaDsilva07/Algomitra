import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import ProblemListPage from './components/ProblemListPage';
import ProblemPage from './components/ProblemPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProblemListPage />} />
      <Route path="/problems/:id" element={<ProblemPage />} />
    </Routes>
  );
}

export default App;