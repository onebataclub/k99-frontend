import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'

import { Input, Button } from './../components/Component'
export default function Login() {
    return (
        <Container>
            <LoginWrapper>
                <Row>
                    <Col>
                        <Input type="text" placeholder="Username" />
                    </Col>
                    <Col>
                        <Input type="password" placeholder="Password" />
                    </Col>
                    <Col>
                        <Button>Login</Button>
                    </Col>
                </Row>
            </LoginWrapper>
        </Container>
    )
}

const LoginWrapper = styled.div`
    width : 500px;
    margin:0 auto;
    padding:20px;
    margin-top:20px;

`