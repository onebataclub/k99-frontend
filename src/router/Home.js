import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Link } from "react-router-dom";
import Slide from './../components/Slide'
import { Label } from './../components/Component'
import { game, bank } from '../data';
import GameCard from './../components/GameCard'

const Home = ({ t }) => {
 

    return (
        <Container>
            <Row>
                <Slide />
            </Row>
            <Label>{t('entertain_with_new_games_and_amazing_presses')}</Label>
            <Row>
                {game.map((index, key) => {
                    return (
                        <Col key={key} xs={4} sm={4} md={3} lg={2}>
                            <Link key={index.id} to={index.slug}>
                                <GameCard data={index} />
                            </Link>
                        </Col>
                    )
                })}
            </Row>

        </Container >

    )
}
export default Home;

