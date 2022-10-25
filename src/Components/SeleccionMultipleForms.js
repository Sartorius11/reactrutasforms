import React, { Component } from 'react'
import { Form } from 'react-router-dom';

export default class SeleccionMultipleForms extends Component {


    //VAMOS A TENER UNA VARIABLE PARA HACER REFERENCIA  AL <select>
    selectMutiple = React.createRef();

    //METODO PARA GENERAR LOS OPTIONS DINAMICAMENTE
    generarOption = () => {
        
            var options = [];
            for(var i = 1; i<= 10; i++){
                options.push(
                    <option key={i} value={"elemento"+ i}>
                        {"Elemento"+ i}
                    </option>
                );
            }
        return options;
    }

    //METODO PARA MOSTRAR LOS ELEMENTOS SELECCIONADOS
    // AL ENVIAR EL FORM

    mostrarSeleccionados = (e) => {
     e.preventDefault();
     //TENEMOS ACCESO, DENTRO DE UN <select> a sus OPTIONS
     //Y NOS DEVUELVE UN ARRAY
     var options= this.selectMutiple.current.options;
     var datos= "";

     //RECORREMOS TODOS LOS ELEMTOS DEL <SELECT>
     for (var option of options){
        if(option.selected==true){
            datos += option.value +",";
        }
     }
     //MODIFICAMOS EL state
    this.setState({
        seleccionados:datos
    });


    }
    

    //UNA VARIABLE  state PARA DIBUJAR LOS ELEMENTOS SELECCIONADOS
    state = {
        seleccionados: ""
    }


  render() {
    return (
      <div>
        <h1>SeleccionMultipleForms</h1>
        <form onSubmit={this.mostrarSeleccionados}>
            <label>Seleccione elementos :</label>

       
            <select ref={this.selectMutiple}
            size="10" multiple>
                {this.generarOption()}
            </select>

            // BOTON
            <button>
                mostrarSeleccionados
            </button>
        </form>

        <h2 style={{color:"blue"}}>{this.state.seleccionados}</h2>

      </div>
    )
  }
}

