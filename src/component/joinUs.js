import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <Form>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form>
                    <Form.Row>
                        <Col xs={7}>
                            <Form.Control placeholder="City" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="State" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Zip" />
                        </Col>
                    </Form.Row>
                </Form>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Example file input" />
                </Form.Group>

                
                <Button variant="primary" type="submit">
                    가입하기
                </Button>
            </Form>
        );
    }
}

export default App;