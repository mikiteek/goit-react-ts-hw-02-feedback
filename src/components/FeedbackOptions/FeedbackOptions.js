import React from "react";

const FeedbackOptions = ({options, onLeaveFeedback}) => (
  <div className="feedback">
    {options.map(type => (
      <button type="submit" onClick={() => onLeaveFeedback(type)}>{type}</button>
    ))}
  </div>
);

export default FeedbackOptions;