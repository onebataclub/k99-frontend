import React, { useContext } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Link } from "react-router-dom";
import MoviesCardCom from './../components/MoviesCard'
import Slide from './../components/Slide'
import { MoviesContext } from './../MoviesContext'

const Home = () => {
    
    const [movie, setMovie] = useContext(MoviesContext);
    return (
        <Container>
            <Row>
                <Slide />
            </Row>
            <Row>
                {movie.map((index, key) => {
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
export default Home;

