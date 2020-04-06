import React, { Component } from 'react'

class App extends Component {
  state = {
    users: [],
    cargando: true
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users, cargando: false }))
      .catch(error => {
        // Manejo del error
      })
  }

  render () {
    if (this.state.cargando) {
      return <h1>Cargando...</h1>
    }

    return (
      <div>
        <h1>Peticion HTTP</h1>
        <h2>{ this.state.text }</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              { user.name }
              <a href={`http://${user.website}`}>
                Website
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App