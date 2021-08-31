import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../../../assets/img/Other/3.png';
// import ImageGallery from 'react-image-gallery';
import img1 from '../../../assets/img/react-upload/kaeli-upload/1.jpg';
import img2 from '../../../assets/img/react-upload/kaeli-upload/2.jpg';
import img3 from '../../../assets/img/react-upload/kaeli-upload/3.jpg';

import { Parallax } from "react-parallax";
import Slider from '../photography/Slider'
import Gallery  from "../photography/Gallery";







export default function Photography(){
    const images = [
        '../../../assets/img/react-upload/kaeli-upload/1.jpg',
        '../../../assets/img/react-upload/kaeli-upload/2.jpg',
        '../../../assets/img/react-upload/kaeli-upload/3.jpg',
        '../../../assets/img/react-upload/karn-upload/1.jpg',
        '../../../assets/img/react-upload/karn-upload/2.jpg',
        '../../../assets/img/react-upload/karn-upload/3.jpg',
        '../../../assets/img/react-upload/payam-upload/Medium-10-.jpg',
        '../../../assets/img/react-upload/rowan-upload/Original-1.jpg'
    ]
    return (
        <Container>
            <Gallery />
        </Container>
    )
}


const Container = styled.div`
    /* background-image: url(${img}); */
    /* background-size: contain;
    background-color:  #e6eeff; */
    background-color: black;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
`

const Div1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3%;
    padding: 3%;
`

const H1 = styled.h1`
    /* display: flex; */
    margin-top: 10%;
    /* margin: 10%; */
`

const Img = styled.img`
    /* display: flex;
    position: absolute; */
    width: 300px;
    /* width: 200px; */
`

const Box = styled.div`  // mediaQuery needed
    width: 100%;
    height: 800px;
    margin: 800px;
    padding: 30px;
    background-size: contain;
    background-position: 50% 50%;
/* display: block; */
`

//     width: 100%;
//     height: 100%;
