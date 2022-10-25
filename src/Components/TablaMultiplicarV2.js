import React, { Component } from 'react'

export default class TablaMultiplicarV2 extends Component {
    select = React.createRef();

    RecibirDatosForm=(e)=>{
        console.log(this.select.current.value);


        console.log(this.select.current.value);

        var num = this.select.value;

        var array2=[];

        for(var i =0; i<=10; i++){
            array2.push( i*num);
        }

        this.setState({
            
            array1: array2
          });


    }





  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar 2.0</h1>
        <label></label>
        <select name="select" ref={this.select}>
            <option value="value1"> 1</option>
            <option value="value2"> 2</option>
            <option value="value3"> 3</option>
            <option value="value3"> 4</option>
            <option value="value3"> 5</option>
            <option value="value3"> 6</option>
            <option value="value3"> 7</option>
            <option value="value3"> 8</option>
            <option value="value3"> 9</option>
            <option value="value3"> 10</option>
            </select>



      </div>
    )
  }
}
