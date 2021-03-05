import React from 'react'
import styled from 'styled-components'
import { colors } from '../theam'
import { motion } from "framer-motion";
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Link } from 'react-router-dom'


import logo from './../images/logo.png'
import en from './../images/en.svg'
import km from './../images/km.svg'

import { device, size } from './style/breakpoints';

import { setLanguage } from 'react-switch-lang';
import { FiPhoneCall } from 'react-icons/fi'
export default function MainHeader({ t }) {

    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    const handleSetLanguage = (key) => () => {
        setLanguage(key);
    };
    return (
        <Header>
            <Container>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Phone><FiPhoneCall size={25} /> <p>{t('menu.phone')}</p></Phone>
                    <div style={{ display: 'flex' }}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                            <Lang onClick={handleSetLanguage('km')}><img src={km} /></Lang>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                            <Lang onClick={handleSetLanguage('en')}><img src={en} /></Lang>
                        </motion.div>
                    </div>
                </Row>
                <Row>
                    <Col xs={3} sm={3} md={2} lg={2}>
                        <Logo to='/' >
                            <img src={logo} />
                        </Logo>

                    </Col>
                    <Col ref={node} xs={9} sm={9} md={10} lg={10}>
                        <Burger open={open} setOpen={setOpen} />
                        <Menu t={t} open={open} setOpen={setOpen} />
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

const Menu = ({ open, t }) => {
    return (
        <Ul open={open}>
            <Link to='/' >
                <Li>{t('menu.home')}</Li>
            </Link>
            <Link to='/sport' >
                <Li>{t('menu.sport')}</Li>
            </Link>
            <Link to='/casino' >
                <Li>{t('menu.casino')}</Li>
            </Link>
            <Link to='/slot' >
                <Li>{t('menu.slot')}</Li>
            </Link>
            <Link to='/loto' >
                <Li>{t('menu.loto')}</Li>
            </Link>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                <Button to='/login'>{t('menu.login')}</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                <Button to='/signup'>{t('menu.signup')}</Button>
            </motion.div>
        </Ul>
    )
}
const Phone = styled.div`
    margin-top:15px;
    display:flex;
    color: ${colors.white};
    p{
        display:inline-block;
        margin:0;
        padding:0 10px;
    }
`;
const Lang = styled.div`
    border:5px;
    color: ${colors.white};
    cursor: pointer;
    margin-top:20px;
    margin-right:20px;
    img{
        overflow:hidden;
    }

`;
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
