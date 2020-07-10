import React, { Component } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Imgbox, MovieCard, VideoWrapper, List, Thum, Listwrap, Btnwrap } from './../components/Component'
import { movies } from '../data'
import { colors } from './../theam'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesData: movies[this.props.match.params.id - 1],
            active: 0,
        }
        console.log(this.state.moviesData.part[this.state.active])
    }
    changMovie = (e) => {
        this.setState({
            active: e.target.dataset.id,
        })
        console.log(e.target)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <MovieCard>
                            <Imgbox style={{ background: 'URL(' + this.state.moviesData.img + ')' }} />
                        </MovieCard>
                    </Col>
                    <Col xs={6} sm={8} md={9} lg={10}>
                        <h1 style={{ color: colors.white }}>{this.state.moviesData.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 style={{ color: colors.white }}>{this.state.moviesData.title} [{Number(this.state.active) + 1}]</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={8}>
                        <VideoWrapper>
                            <Player data={this.state.moviesData.part[this.state.active]} />
                        </VideoWrapper>
                        <Btnwrap>
                            <div >
                                <ion-icon name="play-back-outline"></ion-icon>
                            </div>
                            <div >
                                <ion-icon name="play-forward-outline"></ion-icon>
                            </div>
                        </Btnwrap>
                    </Col>
                    <Col sm={12} lg={4}>
                        <Listwrap>
                            {
                                this.state.moviesData.part.map((index, key) => {
                                    return <List key={key} data-id={key} onClick={this.changMovie} >
                                        <ListMovie img={this.state.moviesData.img} title={this.state.moviesData.title} id={key} />
                                    </List>
                                })
                            }
                        </Listwrap>
                    </Col>
                </Row>
            </Container >
        )
    }
}
const ListMovie = ({ img, title, id }) => {
    return (
        <>
            <Thum data-id={id} style={{ background: 'URL(' + img + ')' }} />
            <p data-id={id} >{title + ' ភាគទី​​ ' + parseInt(id + 1)}</p>
        </>
    )
}
const Player = ({ data }) => {

    const link = data.substring(0, 3);
    const url = data.substring(3, data.length);
    // okor
    const okur = data => {
        return <iframe src={`http://ok.ru/videoembed/${data}`} allow="autoplay" allow="fullscreen"></iframe>
    };
    // facebook
    const facebook = data => {
        return (
            <iframe src={`https://www.facebook.com/video/embed?video_id=${data}`} allow="autoplay" allow="fullscreen"></iframe>
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