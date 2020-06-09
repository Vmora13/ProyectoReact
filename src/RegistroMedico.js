import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container } from 'react-bootstrap';

class RegistroMedico extends React.Component{

    saveMedico(e) {
        var medico = {
            nombre: document.getElementById("nombreMedico").value,
            cedula: document.getElementById("cedulaMedico").value,
            tarjetaProfesional: document.getElementById("tarjetaProfesionalMedico").value,
            especialidad: document.getElementById("especialidadMedico").value,
            paciente: document.getElementById("pacienteMedico").value,
            
        };

        axios.post ("http://localhost:8000/medicos/", medico)
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
                        <Card.Header>registro medicos</Card.Header>
                            <Form id="form-medico">
                                
                                <Form.Group as={Col} controlId="nombreMedico">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="nombreMedico" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="cedulaMedico">
                                    <Form.Label>Cedula</Form.Label>
                                    <Form.Control type="cedulaMedico" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="tarjetaProfesionalMedico">
                                    <Form.Label>Tarjeta Profesional</Form.Label>
                                    <Form.Control type="tarjetaProfesionalMedico" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="especialidadMedico">
                                    <Form.Label>Especialidad</Form.Label>
                                    <Form.Control type="especialidadMedico" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="pacienteMedico">
                                    <Form.Label>Paciente</Form.Label>
                                    <Form.Control type="pacienteMedico" />
                                </Form.Group>

                                
                            </Form>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit" form="form-medico" onClick = {this.saveMedico}>Ingresar</Button><br />
                    </Col>
                </Row>
            </Container> 
        )

    }
}

export default RegistroMedico