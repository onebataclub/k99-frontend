import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import styled from 'styled-components';
import { colors } from './theam'
import { Label } from './components/Component'
import { bank } from './data'
import OwlCarousel from 'react-owl-carousel2'

import cellcard from './images/phone/cellcard.jpg'
import metfone from './images/phone/metfone.jpg'
import smart from './images/phone/smart.png'


const options = {
    items: 4,
    responsive: {
        0: {
            items: 1,
            loop: true,
        },
        768: {
            items: 3,
            loop: true,
        },
        1200: {
            items: 4,
            loop: true,
        }
    },
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 10,
};

export default function Footer({ t }) {
    return (
        <>
            <Container>
                <Label>{t('our_payment_preferred_method')}</Label>
                <Payment>
                    <OwlCarousel options={options} >
                        {
                            bank.map((index, key) => {
                                return (
                                    <div className="wrap-bank" key={key} >
                                        <div style={{ backgroundImage: `url(${index.img})` }}></div>
                                        <span>
                                            <p>{index.userName}</p>
                                            <p>{index.accNum}</p>
                                        </span>

                                    </div>

                                )
                            })
                        }
                    </OwlCarousel>
                </Payment>
                <Wrapper>
                    <Row>
                        <Col md={4} >
                            <H1>ទាក់ទងមកពួកយើង</H1>
                            <Phone>
                                <div>
                                    <img src={cellcard} alt="cellcard" />
                                </div>
                                <p>085 88 95 99</p>
                            </Phone>
                            <Phone>
                                <div>
                                    <img src={metfone} alt="metfone" />
                                </div>
                                <p>066 88 95 99</p>
                            </Phone>
                            <Phone>
                                <div>
                                    <img src={smart} alt="smart" />
                                </div>
                                <p>081 88 95 99</p>
                            </Phone>
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
            <Container fluid style={{ padding: 0 }}>
                <Bottomcopy>&copy;{new Date().getFullYear()}. All rights reserved for those aged 18+</Bottomcopy>

            </Container>
        </>
    )
}
const Phone = styled.div`
    width: auto;
    margin: 10px 0;
    border-radius:5px;
    /* background:${colors.white}; */
    padding: 5px;
    display: flex;
    flex-direction:row;
    div{
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius:5px;
        img{
            width: 100%;
            height: auto;
        }
    }
    p{
        /* color: ${colors.black}; */
        margin: 0 20px;
    }
    
`

const BankWrap = styled.div`
   background: ${colors.white};
`

const Payment = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom: 20px;
    .wrap-bank{
        border-radius:5px;
        background: #fff;
        display: flex;
        >div{
            border-radius:5px;
            width:70px;
            height:70px;
            margin:5px;
            background-position:center;
            background-size:cover;
            
        }
        span{
            display: flex;
            flex-direction:column;
                p{
                    margin: 0 10px;
                }
            }
    
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
