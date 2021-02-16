import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Link } from "react-router-dom";
import Slide from './../components/Slide'
import { game } from '../data';
import GameCard from './../components/GameCard'

const Home = () => {
    return (
        <Container>
            <Row>
                <Slide />
            </Row>
            <Row>
                {game.map((index, key) => {
                    return (
                        <Col key={key} xs={6} sm={4} md={3} lg={2}>
                            <Link key={index.id} to={index.slug}>
                                <GameCard data={index}/>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Container >

    )
}
export default Home;

