import React, { PureComponent } from 'react'

export default class Bienvenido extends PureComponent {
  render() {
    return (
      <div>
        <h1>Hola amig@ {this.props.MiNombre} desde {this.props.MiPais}</h1>
      </div>
    )
  }
}
