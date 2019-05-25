import React, { Component } from 'react'

export default class Reloj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            nombre:"",
        }
    }
    componentDidMount() {
        this.relojID = setInterval(() => this.correrReloj(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.relojID);
    }

    correrReloj() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hola Este es el tiempo ahora!</h1>
                <h2>Esta es la hora : {this.state.date.toLocaleTimeString()}</h2>
                <input type="text" onChange={(e)=>{
                    this.setState({nombre:e.target.value})
                }} />
                <h1>Hola {this.state.nombre}</h1>
            </div>

        )
    }
}
