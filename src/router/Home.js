import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { colors } from '../theam'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


import { movies } from './../data'
export default function Home() {
    return (

        <Container>
            <Row>
                {movies.map(index => {
                    return (

                        <Col xl={2} >
                            <Link key={index.id} to={`movies/${index.id}`}>
                                <MovieCard>
                                    <Imgbox style={{ background: 'URL(' + index.img + ')' }} />
                                    <h1>{index.title}</h1>
                                </MovieCard>
                            </Link>
                        </Col>

                    )
                })}
            </Row>
        </Container >

    )
}

const MovieCard = styled.div`
    background: ${colors.white};
    border-radius:10px;
    margin: 10px 0;
    overflow:hidden;
    min-width:200px;
    max-width:400px;
    box-shadow: -1px 2px 46px -3px rgba(0,0,0,0.38);
    h1{
        color: ${colors.black};
        padding:10px;
        margin:0;
        font-size:23px;
        min-width:200px;
    }
`;
const Imgbox = styled.div`
    height:300px;
    background-repeat:no-repeat !important;
    background-position:center !important;
    background-size:cover !important;
`;