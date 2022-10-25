import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div>
        {/* CREAMOS NUESTRO  MENU  */}
        <ul style={{display:"inline"}}></ul>
        <li>
            <a href='/'>Home</a>
        </li>
        <li>
            <a href='/cine'>Cine</a>
        </li>
        <li>
            <a href='/musica'>Musica</a>
        </li>

      </div>
    )
  }
}
