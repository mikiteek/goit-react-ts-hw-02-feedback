import React from "react";
import PropTypes from "prop-types";

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

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

export default Statistics;