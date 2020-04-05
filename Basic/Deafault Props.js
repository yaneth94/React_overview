import React, { Component } from 'react'
import propTypes from 'prop-types'

const noop = () => {}

class Profile extends Component {
  static propTypes = {
    name: propTypes.string.isRequired,
    bio: propTypes.string,
    email: propTypes.string,
    age: propTypes.number
  }

  static defaultProps = {
    name: 'Ninja PRO',
    onHello: noop
  }

  saluda = ()  => {
    this.props.onHello()
  }

  render () {
    const { name, bio, email } = this.props
    return (
      <div>
        <h1>{ name }</h1>
        <p>
          { bio }
        </p>
        <a href={`mailto:${email}`}>
          { email }
        </a>
        <button onClick={this.saluda}>
          Saluda
        </button>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <Profile
          bio='Soy un desarrollador Fullstackmy-email@mail.com'
          email='my-email@mail.com'
        />
      </div>
    )
  }
}

export default App