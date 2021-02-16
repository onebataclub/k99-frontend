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
    return (
        <Header>
            <Container>
                <Row>
                    <Col xs={3} sm={3} md={2} lg={2}>
                            <Logo to='/' >
                                <img src={logo} />
                            </Logo>
                       
                    </Col>
                    <Col xs={9} sm={9} md={10} lg={10}>
                        <Ul>
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
                        <Btnmenu>
                            <AiOutlineMenu size={40} />
                        </Btnmenu>
                    </Col>
                </Row>
            </Container>
        </Header>
    )
}
export const Btnmenu = styled.div`
  color:${colors.white};
  position:absolute;
  top:20px;
  right:10px;
  @media screen and (min-width: ${size.sm}){
        display:none;
  }
`;

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
        display:none;
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
