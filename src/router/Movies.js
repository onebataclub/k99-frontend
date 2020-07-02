import React from 'react'
import { Player, BigPlayButton } from 'video-react';
import "./../..//node_modules/video-react/dist/video-react.css";
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { movies } from './../data'


const notPlayer = data => {
    return (
        <Player src={data}>
            <BigPlayButton position="center" />
        </Player>
    )
}

const okur = data => {
    return <iframe width="100%" height="auto" src={data} allow="autoplay"></iframe>
};

const Player2 = data => {
    const link = data.substring(0, 13);
    console.log(link);
    if (link == 'http://ok.ru/'||'https://ok.ru/') {
        return okur(data);
    } else {
        return notPlayer(data);
    }


}
export default function Movies() {
    let { id } = useParams();
    const data1 = movies[id];
    const video = data1.part[1];

    return (
        <Container>
            <Row>
                <Col sm={12} lg={8}>
                    <VideoWrapper>
                        {Player2(video)}
                    </VideoWrapper>
                </Col>
                <Col sm={12} lg={4}>dfgdf</Col>
            </Row>

        </Container>
    )
}

const VideoWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    iframe{
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;