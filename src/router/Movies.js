import React from 'react'
// import { Player, BigPlayButton } from 'video-react';
import "./../..//node_modules/video-react/dist/video-react.css";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Imgbox, MovieCard, VideoWrapper, List, Thum, Listwrap, Btnwrap } from './../components/Component'
import { movies } from './../data'


const okur = data => {
    return <iframe src={`http://ok.ru/videoembed/${data}`} allow="autoplay"></iframe>
};

const facebook = data => {
    return (
        <iframe src={`https://www.facebook.com/video/embed?video_id=${data}`} allow="autoplay"></iframe>

    )
}

const Player2 = data => {
    const link = data.substring(0, 3);
    const url = data.substring(3, data.length);
    console.log(url);
    if (link == 'ok?') {
        return okur(url);
    } else if (link == 'fb?') {
        return facebook(url);
    }
}
export default function Movies() {
    let { id } = useParams();
    const data1 = movies[id - 1];
    const video = data1.part[0];

    return (
        <Container>
            <Row>
                <Col xs={6} sm={4} md={3} lg={2}>
                    <MovieCard>
                        <Imgbox style={{ background: 'URL(' + data1.img + ')' }} />
                    </MovieCard>
                </Col>
                <Col xs={6} sm={8} md={9} lg={10}>
                    <h1>{data1.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={12} lg={8}>
                    <VideoWrapper>
                        {Player2(video)}
                    </VideoWrapper>
                    <Btnwrap>
                        <ion-icon name="play-back-outline"></ion-icon>
                        <ion-icon name="play-forward-outline"></ion-icon>
                    </Btnwrap>
                </Col>
                <Col sm={12} lg={3}>
                    <Listwrap>
                        {data1.part.map((index, key) => {
                            key += 1;
                            return <List key={key}>
                                <Thum style={{ background: 'URL(' + data1.img + ')' }} />
                                <p>{data1.title + ' ភាគទី​​ ' + key}</p>
                            </List>
                        })}
                    </Listwrap>
                </Col>
            </Row>

        </Container>
    )
}

