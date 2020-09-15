import React, {Component} from 'react';

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
      <div>
        <h1>Please leave feedback</h1>
        <button type="submit" onClick={() => this.handleIncrementFeedback("good")}>Good</button>
        <button type="submit" onClick={() => this.handleIncrementFeedback("neutral")}>Neutral</button>
        <button type="submit" onClick={() => this.handleIncrementFeedback("bad")}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {positivesTotal}</p>
        <p>Positive feedback: {good && positivesPercent}</p>
      </div>
    )
  }
}
export default App;