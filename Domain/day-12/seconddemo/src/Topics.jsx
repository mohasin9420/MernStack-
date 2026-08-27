import React from "react";
import "./Topics.css";

function Topics() {
  return (
    <nav className="topics">
      <h3>Index</h3>

      <ol className="topic-list">
        <li>Git & Github</li>
        <li>Jira</li>
        <li>CI/CD Pipeline</li>
        <li>Jenkins</li>
      </ol>
    </nav>
  );
}

export default Topics;