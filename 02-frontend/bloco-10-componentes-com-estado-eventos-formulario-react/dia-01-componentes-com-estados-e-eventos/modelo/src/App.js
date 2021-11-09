import React from 'react'

class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      clicks: 0,
    }

  }


  handleClick() {
    this.setState((previousState, _props) => ({
      clicks: previousState.clicks + 1,
    }))
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.clicks}</button>

  };
}

export default App;
