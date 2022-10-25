import React, { Component } from 'react'
import logocine from'./../assets/images/3.jpg'
export default class Cine extends Component {
  render() {
    return (
        <div>
        <h1>Cine</h1>
        <img src={logocine} alt=""
        style={{width:"300px", height: "300px"}}/>
        
      </div>
      
    )
  }

}
