import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container } from 'react-bootstrap';

class centroMedico extends React.Component{

    saveCentroMedico(e) {
        var centroMedico = {
            nombre: document.getElementById("centroMedicoNombre").value,
            ciudad: document.getElementById("centroMedicoCiudad").value,
            direccion: document.getElementById("centroMedicoDireccion").value,
            telefono: document.getElementById("centroMedicoTelefono").value,
            paciente: document.getElementById("centroMedicoPaciente").value,
            medico: document.getElementById("centroMedicoMedico").value,

        };

        axios.post ("http://localhost:8000/centroMedicos/", centroMedico)
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
                        <Card.Header>registro centro medico</Card.Header>
                            <Form id="form-centroMedico">
                                
                                <Form.Group as={Col} controlId="centroMedicoNombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="centroMedicoNombre" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="centroMedicoCiudad">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Control type="centroMedicoCiudad" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="centroMedicoDireccion">
                                    <Form.Label>Direccion</Form.Label>
                                    <Form.Control type="centroMedicoDireccion" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="centroMedicoTelefono">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control type="centroMedicoTelefono" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="centroMedicoPaciente">
                                    <Form.Label>Paciente</Form.Label>
                                    <Form.Control type="centroMedicoPaciente" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="centroMedicoMedico">
                                    <Form.Label>Medico</Form.Label>
                                    <Form.Control type="centroMedicoMedico" />
                                </Form.Group>

                                
                            </Form>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit" form="form-centroMedico" onClick = {this.saveCentroMedico}>Ingresar</Button><br />
                    </Col>
                </Row>
            </Container> 
        )

    }
}

export default centroMedico