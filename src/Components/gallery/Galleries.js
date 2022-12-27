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
            {/* <Comparison>
                <ComparingQoute>Its More Than Just A Photo...</ComparingQoute>
                <PNote>Drag the middle line to left and right.</PNote>
                <ReactCompareImage leftImage={Before} rightImage={After} />
            </Comparison> */}
            <Img src={Before} alt="musician"  />

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
/* height: 80vh; */
/* position: fixed; */
/* display: absolute; */
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
    /* height: 800px; */
    /* position: absolute; */
    /* left: 0; */
    /* z-index: -1; */

    /* top: 0; */
`
