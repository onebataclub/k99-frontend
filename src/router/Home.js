import React, { Component } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import { colors } from '../theam'
import { Link } from "react-router-dom";
import MoviesCardCom from './../components/MoviesCard'
import Slide from './../components/Slide'
import { movies } from './../data'

export default class Home extends Component {
    render() {
        console.log(this.state)
        return (
            <Container>
                <Row>
                    <Slide />
                </Row>
                <Row>
                    {movies.map((index, key) => {
                        return (
                            <Col key={key} xs={6} sm={4} md={3} lg={2}>
                                <Link key={index.id} to={`movies/${index.id}`}>
                                    <MoviesCardCom data={index} />
                                </Link>
                            </Col>

                        )
                    })}
                </Row>
            </Container >

        )
    }
}

