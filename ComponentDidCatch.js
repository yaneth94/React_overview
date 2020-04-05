import React, { Component } from 'react'

class Boton extends Component {
  state = {
    dispararError: false
  }

  dispatchError = () => {
    this.setState({ dispararError: true })
  }

  render () {

    if (this.state.dispararError) {
      throw new Error('Lo siento he fallado 🔥🔥🔥')
    }

    return (
      <button onClick={this.dispatchError}>
        Boton con Bugg
      </button>
    )
  }
}

class LimiteErrores extends Component {
  state = {
    tieneError: false
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      tieneError: true,
      error
    })
  }


  render () {

    if (this.state.tieneError) {
      return (
        <div>
          Wops! Algo ha salido mal puedes recargar o contactar con el equipo de soporte ♥~
          <div style={{ color: 'orangered' }}>
            { this.state.error && this.state.error.toString() }
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
      </div>
    )
  }
}
export default App