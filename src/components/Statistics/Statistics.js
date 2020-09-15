import React from "react";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
  <div className="statistic">
    <h2>Statistics</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {good && positivePercentage}</p>
  </div>
);

export default Statistics;