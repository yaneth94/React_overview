import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class InpuntNoContolado extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const nombre = event.target[0].value
    const email = event.target[1].value

    // Manejo de datos
    this.props.onSend({ nombre, email })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder='Nombre'
        />
        <input
          type="text"
          placeholder='Email'
        />
        <button>
          Enviar
        </button>
      </form>
    )
  }
}

class App extends Component {

  send = (data) => {
    console.log(data)
  }

  render () {
    return (
      <div>
        <h1>
          Inputs No controlados Formularios <Unicorn />
        </h1>
        <InpuntNoContolado
          onSend={this.send}
        />
      </div>
    )
  }
}

export default App