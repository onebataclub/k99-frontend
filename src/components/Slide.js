import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import styled from 'styled-components';
import { AiOutlineDoubleRight } from 'react-icons/ai';

import { device, size } from './style/breakpoints';

import slide1 from '././../images/slide/slide1.jpg'
import slide3 from '././../images/slide/slide3.jpg'
import slide5 from '././../images/slide/slide5.jpg'
const images = [
    slide1,
    slide3,
    slide5
];
const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};
export default function Slide() {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    return (
        <>
            <Wrapslide>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div className='img'
                        key={page}
                        style={{ background: 'URL(' + images[imageIndex] + ')' }}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 200 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                </AnimatePresence>
                <div className="next" onClick={() => paginate(1)}>
                    <AiOutlineDoubleRight/>
                </div>
                <div className="prev" onClick={() => paginate(-1)}>
                    <AiOutlineDoubleRight/>
                </div>
            </Wrapslide>
        </>
    )
}
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
}

const Wrapslide = styled.div`
    width:100%;
    height: 300px;
    @media screen and (max-width: ${size.sm}){
        height: 200px;
  }
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    margin: 10px;
    .img{
        overflow:hidden;
        border-radius:10px;
    }
`;
