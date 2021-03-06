import React from 'react'
import styled from 'styled-components';
import OwlCarousel from 'react-owl-carousel2';
import { device } from './style/breakpoints';
import slide1 from '././../images/slide/slide1.jpg'
import slide3 from '././../images/slide/slide3.jpg'
import slide5 from '././../images/slide/slide5.jpg'
const images = [
    { imageUrl: slide1 },
    { imageUrl: slide3 },
    { imageUrl: slide5 }
];
const options = {
    items: 1,
    nav:true,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    margin: 0,
};

export default function Slide() {
    return (
        <Wrapslide>
            <OwlCarousel options={options} >
                {images.map((index, key) => {
                    return (
                        <ImageSlide key={key} style={{ backgroundImage: `url(${index.imageUrl})` }} />
                    )
                })}
            </OwlCarousel>

        </Wrapslide>

    )
}
const ImageSlide = styled.div`
    width:100%;
    height:300px;
    background-position:center;
    background-size: cover;
    @media ${device.sm}{
        height: 150px;
    }
`;

const Wrapslide = styled.div`
    margin-top:20px;
    width:100%;
    height: 300px;
    margin-bottom:20px;
    @media ${device.sm}{
        height: 150px;
    }
`;
