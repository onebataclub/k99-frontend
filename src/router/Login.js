import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'

import { Input, Button } from './../components/Component'
export default function Login() {
    return (
        <Container>
            <LoginWrapper>
                    <div>
                        <Input type="text" placeholder="Username" />
                        <Input type="password" placeholder="Password" />
                        <Button>Login</Button>
                    </div>
            </LoginWrapper>
        </Container>
    )
}

const LoginWrapper = styled.div`
    /* max-width : 500px; */
    margin:0 auto;
    padding:20px;
    margin-top:20px;
    >div{
        overflow:hidden;
        display:flex;
        flex-direction:column;
    }

`