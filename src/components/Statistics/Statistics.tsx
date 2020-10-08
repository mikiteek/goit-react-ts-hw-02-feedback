import React from "react";
import PropTypes from "prop-types";

interface Props {
  good: number,
  neutral: number,
  bad: number,
  total: number,
  positivePercentage: number,
}

const Statistics = ({total, positivePercentage, good = 0, neutral = 0, bad = 0}: Props) => (
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