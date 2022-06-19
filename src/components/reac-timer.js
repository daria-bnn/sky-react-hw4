import React from 'react'

export default class ReacTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, isCounting: false }
  }

  componentDidMount() {}

  componentDidUpdate(prevState) {
    if (this.state.isCounting !== prevState.isCounting) {
      if (this.state.isCounting) {
        this.startTimer()
      } else {
        this.stopTimer()
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  handleStart = () => {
    this.setState({ isCounting: true })
  }

  handleStop = () => {
    this.setState({ isCounting: false })
  }

  handleReset = () => {
    this.setState({ isCounting: false, count: 0 })
  }

  startTimer() {
    if (this.timerId === undefined) {
      this.timerId = setInterval(() => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
      }, 1000)
    }
  }

  stopTimer() {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId)
      this.timerId = undefined
    }
  }

  render() {
    return (
      <div className="ReacTimer">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button type="button" onClick={this.handleStart}>
            Start
          </button>
        ) : (
          <button type="button" onClick={this.handleStop}>
            Stop
          </button>
        )}
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    )
  }
}
