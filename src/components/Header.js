import React from 'react'
import styled from 'styled-components'
import { colors } from '../theam'
// 
import { Container, Row, Col } from 'styled-bootstrap-grid'
// Route
import { Link } from 'react-router-dom'

import logo from './../images/logo.png'
export default function MainHeader() {
    return (
        <Header>
            <Container>
                <Row>
                    <Col xs={3} sm={3} md={2} lg={2}>
                        <Link to='/'>
                            <Logo>
                                <img src={logo} />
                            </Logo>
                        </Link>
                    </Col>
                    <Col xs={9} sm={9} md={10} lg={10}>
                        <Ul className='menu'>
                            <Link to="/" >
                                <Li>Home</Li>
                            </Link>
                            <Link to="/category">
                                <Li>Category</Li>
                            </Link>

                            <Li>
                                <Clock />
                            </Li>

                        </Ul>
                    </Col>
                </Row>
            </Container>
        </Header>
    )
}
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <>
                {this.state.date.toLocaleTimeString()}
            </>
        );
    }
}

const Header = styled.header`
    background: ${colors.black};
    border-bottom : 1px solid ${colors.gray};
`;
const Logo = styled.div`
padding:0;
height:50px;
    img{
        height:100%;
        width:auto;
    }
`;
const Ul = styled.ul`
    margin:0;
    padding:0;
    display: flex;
    justify-content:flex-end;
`;
const Li = styled.li`
    list-style:none;
    font-size:15px;
    padding: 20px 15px;
    color: ${colors.white};
`;
