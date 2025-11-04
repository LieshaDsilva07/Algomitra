import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { problems } from "../data/problems";
import ProblemStatement from "./ProblemStatement";
import EditorPanel from "./EditorPanel";
import SubmissionSuccessPanel from "./SubmissionSuccessPanel";

function ProblemPage() {
  const { id: problemId } = useParams();
  const problem = problems.find((p) => p.id === problemId);

  const [leftPanelView, setLeftPanelView] = useState("description");
  const [submissionPerformance, setSubmissionPerformance] = useState(null);

  const showSuccessFeedback = (performanceData) => {
    setSubmissionPerformance(performanceData);
    setLeftPanelView("success");
  };

  const showProblemDescription = () => {
    setLeftPanelView("description");
    setSubmissionPerformance(null);
  };

  if (!problem) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Problem not found!</h2>
        <Link to="/">← Back to Problem List</Link>
      </div>
    );
  }

  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden", // prevent full page scroll
        backgroundColor: "#f9fafb",
      }}
    >
      {/* LEFT PANEL */}
      <div
        className="left-panel"
        style={{
          flex: "1 1 50%",
          overflowY: "auto", // independent scroll
          padding: "20px 25px",
          backgroundColor: "#fff",
          borderRight: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100%", // allow internal scroll for success panel
          }}
        >
          {leftPanelView === "description" ? (
            <ProblemStatement problem={problem} />
          ) : (
            <SubmissionSuccessPanel
              problem={problem}
              performance={submissionPerformance}
              onViewProblemDescription={showProblemDescription}
            />
          )}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        className="right-panel"
        style={{
          flex: "1 1 50%",
          overflowY: "auto", // independent scroll
          padding: "20px 25px",
          backgroundColor: "#ffffff",
        }}
      >
        <EditorPanel
          problem={problem}
          showSuccessFeedback={showSuccessFeedback}
          key={problem.id}
        />
      </div>
    </main>
  );
}

export default ProblemPage;
