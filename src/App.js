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

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="submit" onClick={() => this.handleIncrementFeedback("good")}>Good</button>
        <button type="submit" onClick={() => this.handleIncrementFeedback("neutral")}>Neutral</button>
        <button type="submit" onClick={() => this.handleIncrementFeedback("bad")}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    )
  }
}
export default App;