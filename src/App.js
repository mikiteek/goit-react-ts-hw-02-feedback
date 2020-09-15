import React, {Component} from 'react';
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
handleIncrementFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      }
    })
}
countTotalFeedback = () => Object.values(this.state).reduce((acc, cur) => acc + cur);

countPositiveFeedbackPercentage = () => this.state.good * 100 / this.countTotalFeedback();

  render() {
    const {good, neutral, bad} = this.state;
    const positivesTotal = this.countTotalFeedback();
    const positivesPercent = this.countPositiveFeedbackPercentage().toFixed(2);
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleIncrementFeedback}
        />
        <Statistics
          bad={bad}
          good={good}
          neutral={neutral}
          total={positivesTotal}
          positivePercentage={positivesPercent}
        />
      </Section>
    );
  };
}
export default App;