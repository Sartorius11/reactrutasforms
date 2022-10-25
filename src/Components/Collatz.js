import React, { Component } from "react";

export default class Collatz extends Component {
  cajatexto = React.createRef();

  recibirDatosFormu = (e) => {
    e.preventDefault();

    console.log(this.cajatexto.current.value);

    var num = this.cajatexto.current.value;
    this.state.secuencia=[];

    this.state.secuencia.push(num);
    this.setState({
      secuencia: this.state.secuencia,
    });

    while (num > 1) {
      if (num % 2 == 0) {
        num = parseInt(num) / 2;
        this.state.secuencia.push(num);
        this.setState({
          secuencia: this.state.secuencia,
        });
      } else {
        num=parseInt(num) * 3 + 1;
        this.state.secuencia.push(num);
        this.setState({
          secuencia: this.state.secuencia,
        });
    }
    }
     console.log(this.state.secuencia)
  };

  state = {
    secuencia: [],
  };

  render() {
    return (
      <div>
        {/* EL FORM recibo los datos  */}
        <form onSubmit={this.recibirDatosFormu}>
          <h1>Conjetura Collatz</h1>
          <label>Conjetura de Collatz: </label>
          <input type="text" ref={this.cajatexto} />
          <button>PROBAR AQUI!</button>

          {this.state.secuencia.length>0 && (
            <div>
              {this.state.secuencia.map((numero, index)=>{return <li key={index}>{numero}</li>
                }
              )}

            </div>
          )}

   

          
        </form>
      </div>
    );
  }
}
