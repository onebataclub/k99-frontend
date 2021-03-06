import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import styled from 'styled-components';
import { colors } from './theam'
import { Label } from './components/Component'
import { bank } from './data';


export default function Footer({ t }) {
    return (
        <>
            <Container>
                <Label>{t('our_payment_preferred_method')}</Label>
                <Payment>
                    {bank.map((index, key) => <div key={key} style={{backgroundImage:`url(${index.img})`}}></div>)}
                </Payment>
                <Wrapper>
                    <Row>
                        <Col md={4} >
                            <H1>ទាក់ទងមកពួកយើង</H1>
                            <p>
                                081889599 (24/7 Support Line) <br />
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
            <Container fluid style={{ margin: 0 }}>
                <Bottomcopy>&copy;{new Date().getFullYear()}. All rights reserved for those aged 18+</Bottomcopy>

            </Container>
        </>
    )
}


const Payment = styled.div`
    max-width:700px;
    margin:0 auto;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    >div{
        border-radius:5px;
        background: #fff;
        width:70px;
        height:70px;
        margin:5px;
        background-position:center;
        background-size:cover;
        border: 3px solid ${colors.primary};
    
    }
`;
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
