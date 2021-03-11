import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

import styled from "styled-components";
import { colors } from "./theam";
import { Label } from "./components/Component";
import { bank } from "./data";
import OwlCarousel from "react-owl-carousel2";
import { AiOutlineDown } from 'react-icons/ai'

import cellcard from "./images/phone/cellcard.jpg";
import metfone from "./images/phone/metfone.jpg";
import smart from "./images/phone/smart.png";

import { device } from './components/style/breakpoints'

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
        },
    },
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 10,
};

export default function Footer({ t }) {
    // const isopen = (e) => {
    //     const node = e.target.parentNode.childNodes[1];
    //     node.style.display = "block"
    //     console.dir(node)
    // }
    return (
        <>
            <Container>
                <Label>{t("our_payment_preferred_method")}</Label>
                <Payment>
                    <OwlCarousel options={options}>
                        {bank.map((index, key) => {
                            return (
                                <div className="wrap-bank" key={key}>
                                    <div style={{ backgroundImage: `url(${index.img})` }}></div>
                                    <span>
                                        <p>{index.userName}</p>
                                        <p>{index.accNum}</p>
                                    </span>
                                </div>
                            );
                        })}
                    </OwlCarousel>
                </Payment>
                <Row style={{ color: colors.white }}>
                    <Col md={3}>
                        <H2>{t("rule.information.title")} <AiOutlineDown /></H2>
                        <span>
                            <H3>{t("rule.information.body.registation")}</H3>
                            <p>{t("rule.information.body.registation_content")}</p>
                            <H3>{t("rule.information.body.affiliates")}</H3>
                            <p>{t("rule.information.body.affiliates_content")}</p>
                            <H3>{t("rule.information.body.responsible_gaming")}</H3>
                            <p>{t("rule.information.body.responsible_gaming_content")}</p>
                            <H3>{t("rule.information.body.security")}</H3>
                            <p>{t("rule.information.body.security_content")}</p>
                        </span>
                    </Col>
                    <Col md={3}>
                        <H2>{t("rule.product.title")}</H2>
                        <H3>{t("rule.product.body.sports_betting")}</H3>
                        <p>{t("rule.product.body.sports_betting_content")}</p>
                        <H3>{t("rule.product.body.online_casino")}</H3>
                        <p>{t("rule.product.body.online_casino_content")}</p>
                        <H3>{t("rule.product.body.live_casino")}</H3>
                        <p>{t("rule.product.body.live_casino_content")}</p>
                    </Col>
                    <Col md={3}>
                        <H2>{t("rule.infor_center.title")}</H2>
                        <H3>{t("rule.infor_center.body.promotions")}</H3>
                        <p>{t("rule.infor_center.body.promotions_content")}</p>
                        <H3>{t("rule.infor_center.body.help_centre")}</H3>
                        <p>{t("rule.infor_center.body.help_centre_content")}</p>
                        <H3>{t("rule.infor_center.body.payment_methods")}</H3>
                        <p>{t("rule.infor_center.body.payment_methods_content")}</p>
                        <H3>{t("rule.infor_center.body.contact_us")}</H3>
                        <p>{t("rule.infor_center.body.contact_us_content")}</p>
                    </Col>
                    <Col md={3}>
                        <H2>{t("rule.betting_info.title")}</H2>
                        <H3>{t("rule.betting_info.body.sports_results")}</H3>
                        <p>{t("rule.betting_info.body.sports_results_content")}</p>
                        <H3>{t("rule.betting_info.body.betting_statistics")}</H3>
                        <p>{t("rule.betting_info.body.betting_statistics_content")}</p>
                        <H3>{t("rule.betting_info.body.sports_betting")}</H3>
                        <p>{t("rule.betting_info.body.sports_betting_content")}</p>
                        <H3>{t("rule.betting_info.body.casino_betting")}</H3>
                        <p>{t("rule.betting_info.body.casino_betting_content")}</p>
                    </Col>
                </Row>

                <Wrapper>
                    <Row>
                        <Col md={4}>
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
                        <Col md={4}>
                            <H1>សេវាកម្មរបស់ពួកយើង</H1>
                            <p>ទំនាក់ទំនង ធ្វើ ភ្នាក់ងារ ដាក់ប្រាក់ ដកប្រាក់ ចុះឈ្មោះ FAQ</p>
                        </Col>
                        <Col md={4}>
                            <H1>ចូលទៅកាន់ ហ្វេសបុកផេកពួកយើង</H1>
                        </Col>
                    </Row>
                </Wrapper>
            </Container>
            <Container fluid style={{ padding: 0 }}>
                <Bottomcopy>
                    &copy;{new Date().getFullYear()}. All rights reserved for those aged
          18+
        </Bottomcopy>
            </Container>
        </>
    );
}
const Phone = styled.div`
  width: auto;
  margin: 10px 0;
  border-radius: 5px;
  /* background:${colors.white}; */
  padding: 5px;
  display: flex;
  flex-direction: row;
  div {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 5px;
    img {
      width: 100%;
      height: auto;
    }
  }
  p {
    /* color: ${colors.black}; */
    margin: 0 20px;
  }
`;

const Payment = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  .wrap-bank {
    border-radius: 5px;
    background: #fff;
    display: flex;
    > div {
      border-radius: 5px;
      width: 70px;
      height: 70px;
      margin: 5px;
      background-position: center;
      background-size: cover;
    }
    span {
      display: flex;
      flex-direction: column;
      p {
        margin: 0 10px;
        margin-top: 5px;
      }
    }
  }
`;
const Bottomcopy = styled.div`
  background-color: ${colors.primary};
  text-align: center;
  padding: 10px;
`;

const H1 = styled.h1`
  padding: 10px 0;
  margin: 0;
  font-size: 18px;
`;
const H2 = styled.h2`
text-transform:uppercase;
  padding: 10px 0;
  margin: 0;
  font-size: 18px;
  background: ${colors.gradient};
  position:relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  &::before {
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${colors.gradient};
    content: "";
    position: absolute;
  }
  @media ${device.sm}{
       cursor: pointer;
    }
  svg{
      color: ${colors.gradient};
      display:none;
      position:absolute;
      right:0;
      top:20px;
      @media ${device.sm}{
       display:block;
    }
  }
`;
const H3 = styled.h3`
  padding: 10px 0;
  margin: 0;
  font-size: 16px;
  
`;
const Wrapper = styled.div`
  color: ${colors.white};
  background: ${colors.black};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  > p {
    margin: 0;
  }
`;
