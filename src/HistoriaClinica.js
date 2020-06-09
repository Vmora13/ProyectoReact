import React from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Card, Container } from 'react-bootstrap';

class RegistroHistoriasClinica extends React.Component{

    saveHistorias(e) {
        var historias = {
            fecha: document.getElementById("historiasFecha").value,
            evento: document.getElementById("historiasEvento").value,  

        };

        axios.post ("http://localhost:8000/historiasClinicas/", historias)
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
                        <Card.Header>Historias clinicas</Card.Header>
                            <Form id="form-historia">
                                
                                <Form.Group as={Col} controlId="historiasFecha">
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control type="historiasFecha" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="historiasEvento">
                                    <Form.Label>Evento</Form.Label>
                                    <Form.Control type="historiasEvento" />
                                </Form.Group>
                                
                            </Form>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit" form="form-historia" onClick = {this.saveHistorias}>Ingresar</Button><br />
                    </Col>
                </Row>
            </Container> 
        )

    }
}

export default RegistroHistoriasClinica