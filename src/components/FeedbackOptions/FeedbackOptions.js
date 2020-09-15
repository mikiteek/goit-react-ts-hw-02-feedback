import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({options, onLeaveFeedback}) => (
  <div className="feedback">
    {options.map(type => (
      <button type="submit" onClick={() => onLeaveFeedback(type)}>{type}</button>
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