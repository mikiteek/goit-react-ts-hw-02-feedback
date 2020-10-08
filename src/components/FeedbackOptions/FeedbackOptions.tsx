import React from "react";
import styles from "./FeedbackOptions.module.css";

interface Props {
  options: string[],
  onLeaveFeedback: any,
}

const FeedbackOptions = ({onLeaveFeedback, options = ["good", "neutral", "bad"]}: Props) => (
  <div>
    {options.map(type => (
      <button className={styles["btnFeedback"]} type="submit" onClick={() => onLeaveFeedback(type)}>{type}</button>
    ))}
  </div>
);

export default FeedbackOptions;