import React, { Component } from 'react'
import { Imgbox, MovieCardHome, Icon, H1 } from './../components/Component'
import { motion } from "framer-motion";

import { colors } from "./../theam"

export default class MoviesCardCom extends Component {

    render() {
        const { data } = this.props;
        return (
            <motion.div className="movies-card" whileHover={{ scale: 1.05 }}>
                <MovieCardHome>
                    <Imgbox style={{ background: 'URL(' + data.img + ')' }} />
                    <div className='title'>
                        <Icon>
                            <ion-icon name="play-outline"></ion-icon>
                        </Icon>
                        <H1>{data.title}</H1>
                    </div>
                </MovieCardHome >
            </motion.div>
        )
    }
}
