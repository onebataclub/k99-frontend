import React from 'react'
import styled from 'styled-components'
import { colors } from '../theam'
// 
import { Container, Row, Col } from 'styled-bootstrap-grid'
// Route
import { Link, Router } from 'react-router-dom'

import logo from './../images/logo.png'

export default function MainHeader() {
    return (
        <Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Logo>
                            <img src={logo} />
                        </Logo>
                    </Col>
                    <Col lg={8}>
                        <Ul>
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/category">
                                <li>Category</li>
                            </Link>
                            <Link to="/movies">
                                <li>Movies</li>
                            </Link>
                        </Ul>
                    </Col>
                </Row>
            </Container>
        </Header>
    )
}



const Header = styled.header`
    background: ${colors.black}
`;

const Logo = styled.div`
padding: 10px 0;
height:50px;
    img{
        height:100%;
        width:auto;
    }
`;

const Ul = styled.ul`
    margin:0;
    padding:0;
    display: flex;
    justify-content:flex-end;
    li{
        list-style:none;
        font-size:22px;
        padding: 20px 15px;
        color: ${colors.white}
    }
`;
