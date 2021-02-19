import React from 'react'
import styled from 'styled-components'
import { colors } from '../theam'
import { motion } from "framer-motion";

import { Container, Row, Col } from 'styled-bootstrap-grid'
// Route
import { Link } from 'react-router-dom'
import { menu } from './../data'
import logo from './../images/logo.png'

import { AiOutlineMenu } from 'react-icons/ai'
import { device, size } from './style/breakpoints';

export default function MainHeader() {

    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    return (
        <Header>
            <Container>
                <Row>
                    <Col xs={3} sm={3} md={2} lg={2}>
                        <Logo to='/' >
                            <img src={logo} />
                        </Logo>

                    </Col>
                    <Col ref={node} xs={9} sm={9} md={10} lg={10}>

                        <Burger open={open} setOpen={setOpen} />
                        <Menu open={open} setOpen={setOpen} />

                    </Col>
                </Row>
            </Container>
        </Header>
    )
}

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}


const StyledMenu = styled.nav`
    display:block;
    z-index:5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${colors.black};
    transform: ${({ open }) => open ? 'translateX(-95%)' : 'translateX(0)'};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    right:-120vw;
    transition: transform 0.3s ease-in-out;
    width:100vw;
  
  
`

const Menu = ({ open }) => {
    return (
            <Ul open={open}>
                {
                    menu.map((val, key) => {
                        return (
                            <Link key={key} to={val.slug} >
                                <Li>{val.name}</Li>
                            </Link>
                        )
                    })
                }
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    <Button>ចូល</Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    <Button>ចុះឈ្មេាះ</Button>
                </motion.div>
            </Ul>
    )
}
const StyledBurger = styled.button`
    @media screen and (min-width: ${size.sm}){
        display:none;
    }
    position: absolute;
    top: 15px;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ open }) => open ? colors.white : colors.primary};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

export const Button = styled(Link)`
  font-size: 1em;
  border-radius: 30px;
  margin: 10px;
  padding:10px 30px;
  display:block;
  cursor: pointer;
  color: ${colors.black};
  background:${colors.gradient};
  transition:.3s;
  box-shadow: 0px 0px 7px 0px ${colors.primary};
`;

const Header = styled.header`
    background: ${colors.black};
    border-bottom : 1px solid ${colors.gray};
`;
const Logo = styled(Link)`
display:block;
padding:0;
height:100px;
@media ${device.sm}{
        height:70px;
        margin: 10px 0;
    }
    img{
        height:100%;
        width:auto;
    }
`;
const Ul = styled.ul`
    margin:0;
    padding:15px 0;
    display: flex;
    justify-content:flex-end;
    @media ${device.sm}{
        right:-100vw;
        z-index:5;
        transition: all 0.3s linear;
        transform: ${({ open }) => open ? 'translateX(-160%)' : 'translateX(0)'};
        position:absolute;
        flex-direction:column;
        background:${colors.black};
        top:70px;
        width:100%;
        padding:0;
    }
    
`;
const Li = styled.li`
    list-style:none;
    font-size:15px;
    padding:10px 30px;
    margin:10px 0;
    border-radius:30px;
    color: ${colors.white};
    transition:0.3s;
    &:hover{
        box-shadow: 0px 0px 7px 0px ${colors.primary};
        background:${colors.gradient};
        color:${colors.black};
    }
`;
