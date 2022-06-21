import React from 'react'
import Button from './button'
import Tracker from './Tracker'

const startWork = 1500
const shortBreak = 300
const longBreak = 900

export default class PomodoroTracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: 0, isCounting: false }
  }

  componentDidUpdate(prevState) {
    if (this.state.time === 0) {
      this.stopTimer()
      return
    }

    if (
      this.state.time !== prevState.time ||
      this.state.isCounting !== prevState.isCounting
    ) {
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
    this.setState({ isCounting: true, time: startWork })
  }

  handleShortBreak = () => {
    this.setState({ isCounting: true, time: shortBreak })
  }

  handleLongBreak = () => {
    this.setState({ isCounting: true, time: longBreak })
  }

  handleStop = () => {
    this.setState({ isCounting: false })
  }

  startTimer() {
    if (this.timerId === undefined) {
      this.timerId = setInterval(() => {
        this.setState((prevState) => ({ time: prevState.time - 1 }))
      }, 1000)
    }
  }

  stopTimer() {
    if (this.timerId) {
      clearInterval(this.timerId)
      this.timerId = undefined

      this.setState({ time: 0 })
    }
  }

  render() {
    return (
      <div>
        <h2>Pomodoro Tracker</h2>

        <Tracker>
          <span>{Math.floor(this.state.time / 60)} : </span>
          <span>{this.state.time % 60}</span>
        </Tracker>

        <Button text="Start Working" handleClick={this.handleStart} />
        <Button text="Short Break" handleClick={this.handleShortBreak} />
        <Button text="Long Break" handleClick={this.handleLongBreak} />
        <Button text="Stop" handleClick={this.handleStop} />
      </div>
    )
  }
}
