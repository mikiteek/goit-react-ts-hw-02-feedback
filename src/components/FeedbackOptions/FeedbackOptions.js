import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({options, onLeaveFeedback}) => (
  <div>
    {options.map(type => (
      <button className={styles["btnFeedback"]} type="submit" onClick={() => onLeaveFeedback(type)}>{type}</button>
    ))}
  </div>
);

FeedbackOptions.defaultProps = {
  options: ["good", "neutral", "bad"],
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;