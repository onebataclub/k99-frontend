import React, { Component } from 'react'
import { Imgbox, MovieCard, Icon } from './../components/Component'
import { motion } from "framer-motion";

import { colors } from "./../theam"

export default class MoviesCardCom extends Component {

    render() {
        const { data } = this.props;
        return (
            <MovieCard>
                <motion.div className="movies-card" whileHover={{ scale: 1.05 }}>
                    <Imgbox style={{ background: 'URL(' + data.img + ')' }} />
                    <div className='title'>
                        <Icon>
                            <ion-icon name="play-outline"></ion-icon>
                        </Icon>
                        <h1>{data.title}</h1>
                    </div>
                </motion.div>
            </MovieCard >
        )
    }
}
