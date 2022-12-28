import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Galleria from './Galleria';
import ReactCompareImage from 'react-compare-image';
import Before from '../../../assets/img/Other/Bahramji-1.jpg';
import After from '../../../assets/img/Other/Bahramji-2.jpg';



export default function Galleries(){


    return (
        <Div>  
            <Div2>
                {/* <H1Left>IMAGE</H1Left> */}
                <Img src={Before} alt="musician"  />
                {/* <H1Right>GALLERY</H1Right> */}
            </Div2>
            <Galleria />
        </Div>
    );
}

const Div = styled.div`
  text-align: center;
  background-color: black;
`
const ComparingQoute = styled.h1`
    display: flex;
    justify-content: center;
    padding-top: 2%;
    width: 100%;
    font-Size: 1.8rem;
    @media only screen and (max-width: 800px) {
        font-size: 1.2rem;
    }
`
const PNote = styled.p`
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 800px) {
        font-size: .8rem;
    }
`

const Comparison = styled.div`
    margin: 2% 10%;
    padding: 0 10%;
    @media only screen and (max-width: 1000px) {
        margin: 2% 5%;
        padding: 0 5%;
    }
    @media only screen and (max-width: 800px) {
        margin: 2%;
        padding: 4% 0;
    }
`

const Img = styled.img`
    width: 80%;
    @media only screen and (max-width: 800px) {
        width: 100%;   
    }
`

const H1Left = styled.h1`
    /* color: white; */
    text-shadow: 0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white;
    transform: rotate(-90deg);
    position: absolute;
    left: -100px;
    top: 40%;
    font-size: 5rem;
    /* line-height: 10%; */
    line-height: 34px;
    height: 35px;
    letter-spacing: 25px;
    `
const H1Right = styled.h1`
    /* color: white; */
    text-shadow: 0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white;
    transform: rotate(-90deg);
    position: absolute;
    right: -200px;
    top: 40%;
    font-size: 5rem;
    line-height: 34px;
    height: 35px;
    letter-spacing: 25px;
`

const Div2 = styled.div`
    width: 100%;
    position: relative;
`
