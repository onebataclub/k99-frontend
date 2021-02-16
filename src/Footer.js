import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import styled from 'styled-components';
import { colors } from './theam'
export default function Footer() {
    return (
        <>
            <Container>
                <Wrapper>
                    <Row>
                        <Col md={4} >
                            <H1>ទាក់ទងមកពួកយើង</H1>
                            <p>
                                077 000 000 (24/7 Support Line) <br/>
                                031 000000 | 069 000 000
                            </p>
                        </Col>
                        <Col md={4} >
                            <H1>សេវាកម្មរបស់ពួកយើង</H1>
                            <p>ទំនាក់ទំនង ធ្វើ ភ្នាក់ងារ
                            ដាក់ប្រាក់
                            ដកប្រាក់
                            ចុះឈ្មោះ
                        FAQ</p>
                        </Col>
                        <Col md={4} >
                            <H1>
                                ចូលទៅកាន់ ហ្វេសបុកផេកពួកយើង
                            </H1>
                        </Col>
                    </Row>
                </Wrapper>
            </Container>
            <Container fluid>
                <Bottomcopy>&copy;{new Date().getFullYear()}. All rights reserved for those aged 18+</Bottomcopy>

            </Container>
        </>
    )
}
const Bottomcopy = styled.div`
   background-color:${colors.primary};
   text-align:center;
   padding: 10px;

`;

const H1 = styled.h1`
 padding: 10px 0;
 margin: 0;
 font-size:18px;
`;
const Wrapper = styled.div`
color:${colors.white};
  background:${colors.black};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
