import React from 'react'

export default class CurrentTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: 0 }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ data: new Date().toLocaleTimeString().slice(0, -3) })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <div>
        <h2>Текущее время:</h2>
        <p>{this.state.data}</p>
      </div>
    )
  }
}
