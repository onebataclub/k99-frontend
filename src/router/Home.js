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

const events = {
    onDragged: function (event) {

    },
    onChanged: function (event) {

    }
};

const Home = () => {
    return (
        <Container>
            <Row>
                <Slide />
            </Row>
            <Label>កំសាន្តជាមួយហ្គេមថ្មី និង ប្រម៉ូសិនអស្ចារ្យ</Label>
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
            <Label>វិធីសាស្ត្រទូទាត់ប្រាក់</Label>
            <Row>
                <Container style={{maxWidth:"500px"}}>
                    <OwlCarousel options={options} events={events} >
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

