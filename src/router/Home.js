import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Link } from "react-router-dom";
import Slide from './../components/Slide'
import { game, bank } from '../data';
import { colors } from '../theam';
import GameCard from './../components/GameCard'
import OwlCarousel from 'react-owl-carousel2';

import styled from 'styled-components'

const Label = styled.h2`
    color: ${colors.white};
    text-align:center;
`;
const options = {
    items: 5,
    rewind: true,
    autoplay: true,
    margin: 10,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
};

const Home = ({t}) => {
    return (
        <Container>
            <Row>
                <Slide />
            </Row>
            <Label>{t('our_payment_preferred_method')}</Label>
            <Row>
                {game.map((index, key) => {
                    return (
                        <Col key={key} xs={6} sm={4} md={3} lg={2}>
                            <Link key={index.id} to={index.slug}>
                                <GameCard data={index} />
                            </Link>
                        </Col>
                    )
                })}
            </Row>
            <Label>{t('entertain_with_new_games_and_amazing_presses')}</Label>
            <Row>
                <Container style={{maxWidth:"500px"}}>
                    <OwlCarousel options={options} >
                        {bank.map((index, key) => {
                            return (
                                <div key={key}>
                                    <img src={index.img} alt={index.name} />
                                </div>
                            )
                        })}

                    </OwlCarousel>
                </Container>
            </Row>
        </Container >

    )
}
export default Home;

