import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import styled from 'styled-components';
import { colors } from './theam'
export default function Footer() {
    return (
            <Container>
                <Wrapper>
                <Row>
                    <Col md={4} >
                        <H1>នេះគីជាគេហទំព័រ​ ទស្សនាភាពយន្តនិយាយខ្មែរ </H1>
                    </Col>
                    <Col md={4} >
                        <H1>ទំនាក់ទំនង៖ xxxxxxxxxxxxxxxxx</H1>
                    </Col>
                    <Col md={4} >
                        <H1>
                            &copy;រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ​ Vichea Dev
                    </H1>
                    </Col>
                </Row>
                </Wrapper>
            </Container>
    )
}
const H1 = styled.h1`
 color:${colors.black};
 padding: 10px;
 margin: 0;
 font-size:18px;
`;
const Wrapper = styled.div`
  background:${colors.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
