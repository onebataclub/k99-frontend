import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import styled from 'styled-components';
import { colors } from './theam'
export default function Footer() {
    return (
        <Container style={{ background: colors.black }}>
            <Row>
                <Col md={4} >
                    <H1>
                        &copy;រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ​ Vichea Solution
                    </H1>

                </Col>
                <Col md={4} >

                </Col>
                <Col md={4} >

                </Col>
            </Row>
        </Container>
    )
}
const H1 = styled.h1`
 color:${colors.white};
 padding: 10px;
 margin: 0;
 font-size:18px;

`;
