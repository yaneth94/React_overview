import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    movie: {},
    cargando: false
  }
  handleSubmit = async (event) => {
    event.preventDefault()

    this.setState({cargando: true})

    const title = event.target[0].value 
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=d318f7d'
    
    const rest = await axios.get(url,{
      params: {
        t: title
      }
    })
     this.setState({
      movie: rest.data, 
      cargando: false
    })

  }
  render() {
    const {movie, cargando} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de la pelicula" />
          <button>
            Buscar
          </button>
        </form>
       {cargando && (
         <p>Cargando</p>
       )}
         { movie.Title && !cargando && (
          <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <img src={movie.Poster} alt="Poster"></img>
          </div>
        )}
      </div>
    );
  }
}

export default App;