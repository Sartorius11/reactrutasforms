import React, { Component } from 'react'
export default class TablaMultiplicar extends Component {
    cajanumero = React.createRef();
    selectnumero = React.createRef();
    mostrarTabla = (e) => {
        e.preventDefault();
        //var num = parseInt(this.cajanumero.current.value);
        var num = parseInt(this.selectnumero.current.value);
        var datos = [];
        for (var i = 1; i <= 10; i++){
            var resultado = num * i;
            var operacion = num + " * " + i;
            datos.push(<tr key={i}>
                <td>{operacion}</td>
                <td>{resultado}</td>
            </tr>);
        }
        this.setState({
            filas: datos
        });
    }


    generarOptions = () => {
        var options = [];
        for (var i = 1; i <= 5; i++){
            var random = parseInt(Math.random() * 100) + 1;
            options.push(<option>{random}</option>);
        }
        return options;
    }
    state = {
        filas: []
    }

  render() {
    return (
        <div>
            <h1>Tabla multiplicar</h1>
            <form onSubmit={this.mostrarTabla}>
                <label>Seleccione un número </label>
                <select ref={this.selectnumero}>
                    {this.generarOptions()}                    
                </select>
                <br/>
                <label>Introduzca número </label>
                <input ref={this.cajanumero}/>
                <button>
                    Mostrar tabla
                </button>
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>Operación</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.filas}
                </tbody>
            </table>
        </div>
    )
  }
}


