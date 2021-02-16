import React, { Component } from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components'
import { colors } from "../theam"


export default class GameCars extends Component {
    render() {
        const { data } = this.props;
        return (
            <motion.div whileHover={{ scale: 1.05 }}>
                <Game>
                    <img src={data.img} alt={data.name} />
                    <p>{data.name}</p>
                </Game>

            </motion.div>
        )
    }
}
const Game = styled.div`
  width:100%;
  border-radius:10px;
  overflow:hidden;
  img{
      width:100%;
  }
  p{
      font-size:16px;
      color:${colors.white};
      text-align:center;
  }
`;