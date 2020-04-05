import React from "react";
//import "./TarjetaFruta.css"
import styles from "./TarjetaFruta.module.css"

class TarjetaFruta extends React.Component {
    constructor() {
        super()
       /* this.agregar = this.agregar.bind(this)
        this.quitar = this.quitar.bind(this)*/

        const METHODS = [
            'agregar',
            'quitar',
            'limpiar'
        ]
        METHODS.forEach((method) => {
            this[method] = this[method].bind(this)
        })
        
    }
    state = {
        cantidad: 0
    }
    agregar = () => this.setState({cantidad: this.state.cantidad + 1})
    

    quitar  = () => this.setState({cantidad: this.state.cantidad - 1})
    

    limpiar = () => this.setState({cantidad: 0})
    

    render() {
        const hasItems = this.state.cantidad > 0 
        //const clases = hasItems ? 'TarjetaFruta-activa': 'TarjetaFruta'
        const activeClass = hasItems ? styles.cardActive : ''
        const clases = styles.card + ' '+ activeClass
        
       /* const styles ={
            border: '1px solid black',
            marginBottom: '1em',
            borderRadius: '0.5em',
            padding: '1em',
            background: hasItems ? 'linear-gradient(45deg,black,#4a02f7)' : 'white',
            color: hasItems ? 'white' : 'black',
            transition: 'all 400ms ease-out'
        }*/
        return (
            <div className={clases}>
                <h3>{this.props.name}</h3>
                <hr></hr>
                <div>Cantidad: {this.state.cantidad}</div>
                <button
                    onClick={this.agregar}
                >
                Agregar
                </button>
                <button onClick={this.quitar}>Quitar</button>
                <button onClick={this.limpiar}>Limpiar</button>
                <p>$ {this.props.price}</p>
                <p>
                    Total:$ {this.props.price * this.state.cantidad}
                </p>
            </div>
        );
    }
}

export default TarjetaFruta;