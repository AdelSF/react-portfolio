import React, { useState } from 'react';
import styled from 'styled-components';


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

export default function Gallery(){
    return (
        <>
          
            <P>hi</P>
            <P><I></I></P>
        </>
    )
}

const Container = styled.div`
    /* height: 100vh;
    width: 100vw;
    background-color: black; */
`
const P = styled.p`
    color: white;
`
const I = styled.i`
    margin: 40px;
    color: white;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border: solid white;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
`
