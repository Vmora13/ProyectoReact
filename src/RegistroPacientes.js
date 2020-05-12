import React from 'react';
import axios from 'axios';

class RegistroPaciente extends React.Component{

    savePaciente(e) {
        var user = {
            nombre: document.getElementById("nombrePaciente").value,
            cedula: document.getElementById("cedulaPaciente").value,
            ciudad: document.getElementById("ciudadPaciente").value,
            direccion: document.getElementById("direccionPaciente").value,
            telefono: document.getElementById("telefonoPaciente").value,

            
        };

        axios.post ("http://localhost:8000/api/", user)
        .then((response) => {
            console.log(response);
            }, (error) => {
                console.log(error)
            });        
        
    }

    render() {
        return <div>
            <h2>REGISTRO PACIENTE</h2>
            <form>
                <label>NOMBRE</label>.
                <input id = "nombrePaciente"></input>

                <label>IDENTIFICACION</label>
                <input id = "cedulaPaciente"></input>

                <label>CIUDAD</label>
                <input id = "ciudadPaciente"></input>

                <label>DIRECCION</label>
                <input id = "direccionPaciente"></input>

                <label>TELEFONO</label>
                <input id = "telefonoPaciente"></input>

                <button onClick = {this.savePaciente} >Guardar</button>
            </form>
        </div>

    }
}

export default RegistroPaciente