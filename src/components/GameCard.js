import React, { Component } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../theam";
import { device } from "./../components/style/breakpoints";

export default class GameCars extends Component {
    render() {
        const { data } = this.props;
        return (
            <motion.div whileHover={{ scale: 1.05 }}>
                <Game>
                    <div style={{ backgroundImage: `url(${data.img})` }} />
                    <p>{data.name}</p>
                </Game>
            </motion.div>
        );
    }
}
const Game = styled.div`
  width: 100%;
  border-radius: 10px;
  > div {
    border-radius: 5px;
    background: #fff;
    width: 100%;
    height: 170px;
    margin: 5px;
    background-position: center;
    background-size: cover;
    border: 1px solid ${colors.primary};
    @media ${device.sm} {
      height: 100px;
    }
  }
  p {
    font-size: 16px;
    color: ${colors.white};
    text-align: center;
  }
`;
