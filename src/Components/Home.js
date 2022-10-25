import React, { Component } from 'react'
import logohome from'./../assets/images/1.jpg'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <img src={logohome} alt=""
        style={{width:"300px", height: "300px"}}/>

      </div>
      
    )
  }
}

