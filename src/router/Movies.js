import React, { Component } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Imgbox, MovieCard, VideoWrapper, List, Thum, Listwrap, Btnwrap } from './../components/Component'
import { movies } from './../data'


export default class Movies extends Component {
    state = {
        data: [],
        part: '',
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const data1 = movies[id - 1];
        this.setState({ data: data1, part: data1.part[0] });
    }

    render() {
        console.log(this.state);

        const { data, part } = this.state;
        return (
            <Container>
                <Row>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <MovieCard>
                            <Imgbox style={{ background: 'URL(' + data.img + ')' }} />
                        </MovieCard>
                    </Col>
                    <Col xs={6} sm={8} md={9} lg={10}>
                        <h1>{data.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={8}>
                        <VideoWrapper>
                            {Player2(part)}
                        </VideoWrapper>
                        <Btnwrap>
                            <div onClick={this.back}>
                                <ion-icon name="play-back-outline"></ion-icon>
                            </div>
                            <div onClick={this.next}>
                                <ion-icon name="play-forward-outline"></ion-icon>
                            </div>

                        </Btnwrap>
                    </Col>
                    <Col sm={12} lg={3}>
                        <Listwrap>
                            {/* {
                                data.part.map((index, key) => {
                                    return <List key={key} data-videoid={index}>
                                        <Thum style={{ background: 'URL(' + data.img + ')' }} />
                                        <p>{data.title + ' ភាគទី​​ ' + key + '+' + index}</p>
                                    </List>
                                })
                            } */}
                        </Listwrap>
                    </Col>
                </Row>

            </Container>
        )
    }
}

const Player2 = data => {
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
