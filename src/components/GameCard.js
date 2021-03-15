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
  overflow:hidden;
  > div {
    margin:0;
    border-radius: 5px !important;
    background: #fff;
    width: 100%;
    height: 170px;
    background-position: center;
    background-size: cover; 
    position:relative;
    background-clip: padding-box;
    border: solid 3px transparent;
    @media ${device.sm} {
      height: 100px;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -5px;
      border-radius: inherit;
      background: ${colors.gradient};
    }
  }
  p {
    font-size: 16px;
    color: ${colors.white};
    text-align: center;
  }
`;
