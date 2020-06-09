import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container } from 'react-bootstrap';

class RegistroPaciente extends React.Component{

    savePaciente(e) {
        var paciente = {
            nombre: document.getElementById("nombrePaciente").value,
            cedula: document.getElementById("cedulaPaciente").value,
            ciudad: document.getElementById("ciudadPaciente").value,
            direccion: document.getElementById("direccionPaciente").value,
            telefono: document.getElementById("telefonoPaciente").value,
            historiaClinica: document.getElementById("historiaClinica").value,

        };

        axios.post ("http://localhost:8000/pacientes/", paciente)
        .then((response) => {
            console.log(response);
            }, (error) => {
                console.log(error)
            });        
        
    }

    render() {
        return (
        <Container maxWidth="sm">
                <Row>
                    <Col sm={8}>
                        <Card body>
                        <Card.Header>registro pacientes</Card.Header>
                            <Form id="form-paciente">
                                
                                <Form.Group as={Col} controlId="nombrePaciente">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="nombrePaciente" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="cedulaPaciente">
                                    <Form.Label>Cedula</Form.Label>
                                    <Form.Control type="cedulaPaciente" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="ciudadPaciente">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Control type="ciudadPaciente" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="direccionPaciente">
                                    <Form.Label>Direccion</Form.Label>
                                    <Form.Control type="direccionPaciente" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="telefonoPaciente">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control type="telefonoPaciente" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="historiaClinica">
                                    <Form.Label>Historia Clinica</Form.Label>
                                    <Form.Control type="historiaClinica" />
                                </Form.Group>

                                
                            </Form>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit" form="form-paciente" onClick = {this.savePaciente}>Ingresar</Button><br />
                    </Col>
                </Row>
            </Container> 
        )

    }
}

export default RegistroPaciente