import React, { Component } from 'react'

class Entrada extends Component {
  entrada = React.createRef()

  componentDidMount () {
    this.focus()
  }

  focus = () => {
    this.entrada.current.focus()
  }

  blur = () => {
    this.entrada.current.blur()
  }

  render () {
    return (
      <div>
        <h1>React refs 🦄</h1>
        <input
          type="text"
          ref={this.entrada}
        />
        <button onClick={this.focus}>
          Focus
        </button>
        <button onClick={this.blur}>
          Blur
        </button>
      </div>
    )
  }
}

class App extends Component {

  render () {

    return (
      <div>
        <Entrada />
      </div>
    )
  }
}

export default App