import React, { useContext, useState } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Imgbox, MovieCard, VideoWrapper, List, Thum, Listwrap, Btnwrap } from './../components/Component'
import { MoviesContext } from './../MoviesContext'
import { movies } from '../data'

const Movies = ({ match }) => {
    let params = match.params.id;
    const [movie, setMovie] = useContext(MoviesContext);
    const thisMovie = movie[params - 1];
    const [ActiveMovie, setActiveMovie] = useState(0);

    const changMovies = e => {
        console.log(e.target.dataset.id);
        setActiveMovie(e.target.dataset.id)
    }
    const back = e => {
        setActiveMovie(e.target.dataset.id)
    }
    const next = e => {
        console.log(e.target.dataset.id);
        setActiveMovie(e.target.dataset.id)
    }
    return (
        <Container>
            <Row>
                <Col xs={6} sm={4} md={3} lg={2}>
                    <MovieCard>
                        <Imgbox style={{ background: 'URL(' + thisMovie.img + ')' }} />
                    </MovieCard>
                </Col>
                <Col xs={6} sm={8} md={9} lg={10}>
                    <h1>{thisMovie.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={12} lg={8}>
                    <VideoWrapper>
                        <Player data={thisMovie.part[ActiveMovie]} />
                    </VideoWrapper>
                    <Btnwrap>
                        <div >
                            <ion-icon name="play-back-outline" onClick={back}></ion-icon>
                        </div>
                        <div >
                            <ion-icon name="play-forward-outline" onClick={next} ></ion-icon>
                        </div>
                    </Btnwrap>
                </Col>
                <Col sm={12} lg={3}>
                    <Listwrap>
                        {
                            thisMovie.part.map((index, key) => {
                                return <List key={key} value={key} onClick={changMovies}>
                                    <Thum style={{ background: 'URL(' + thisMovie.img + ')' }} />
                                    <p>{thisMovie.title + ' ភាគទី​​ ' + parseInt(key+1)}</p>
                                </List>
                            })
                        }
                    </Listwrap>
                </Col>
            </Row>

        </Container>
    )

}

const Player = ({ data }) => {

    const link = data.substring(0, 3);
    const url = data.substring(3, data.length);
    // okor
    const okur = data => {
        return <iframe src={`http://ok.ru/videoembed/${data}`} allow="autoplay"></iframe>
    };
    // facebook
    const facebook = data => {
        return (
            <iframe src={`https://www.facebook.com/video/embed?video_id=${data}`} allow="autoplay"></iframe>
        )
    }
    // condiction
    if (link === 'ok?') {
        return okur(url);
    } else if (link === 'fb?') {
        return facebook(url);
    }
}

export default Movies;