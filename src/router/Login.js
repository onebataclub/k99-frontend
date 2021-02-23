import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'


import { Input,Button } from './../components/Component'
export default function Login() {
    return (
        <Container style={{textAlign:'center'}}>
            <Row>
                <Col>
                    <Input type="text" placeholder="Username" />
                </Col>
                <Col>
                    <Input type="password" placeholder="Password" />
                </Col>
                <Col>
                    <Button>afd</Button>
                </Col>
            </Row>
        </Container>
    )
}
