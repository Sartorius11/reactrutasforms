import React, { Component } from 'react'
import logomusica from'./../assets/images/2.jpeg'
export default class Musica extends Component {
  render() {
    return (
        <div>
        <h1>Musica</h1>
        <img src={logomusica} alt=""
        style={{width:"300px", height: "300px"}}/>
        
      </div>
      
    )
  }
}


