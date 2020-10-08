import React, {Component} from 'react';
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

interface stateTypes {
  good: number,
  neutral: number,
  bad: number
}

class App extends Component<{}, stateTypes> {
  public state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

private handleIncrementFeedback = (type: keyof stateTypes): void => {
  this.setState(prevState =>
    ({[type]: prevState[type] + 1} as any)
  );
}

private countTotalFeedback = (): number => Object.values(this.state).reduce((acc, cur) => acc + cur);

private countPositiveFeedbackPercentage = (): number => this.state.good * 100 / this.countTotalFeedback();

  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivesPercent = parseFloat(this.countPositiveFeedbackPercentage().toFixed(2));
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleIncrementFeedback}
        />
        {total > 0 ? <Statistics
          bad={bad}
          good={good}
          neutral={neutral}
          total={total}
          positivePercentage={positivesPercent}
        /> : <Notification message="No feedback given"/>}
      </Section>
    );
  };
}
export default App;