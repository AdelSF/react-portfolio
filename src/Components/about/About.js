import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../../../assets/img/Other/background-design.png'
import Mmbr from '../../../assets/img/Other/art-pic-1.jpg'



export default function About(){
    return (
        <Container>
            <H1>Photographer - Director</H1>
            <Div>
                <P>My name is Adel Paakraad. I have always considered myself a lifelong student of the arts I had the good fortune to grow up in a family surrounded by artists So I started with painting and drawing but since I started film school about 10 years ago I truly fell in love with photography and that was the beginning of a new journey.</P> 
                <Img src={Mmbr} alt="Team member" />
            </Div>
            
            <H1>Advisor</H1>
            <Div>
                <P>My name is Adel Paakraad. I have always considered myself a lifelong student of the arts I had the good fortune to grow up in a family surrounded by artists So I started with painting and drawing but since I started film school about 10 years ago I truly fell in love with photography and that was the beginning of a new journey.</P> 
                <Img src={Mmbr} alt="Team member" />
            </Div>

            <H1>Illustrator - Photo Editor</H1>
            <Div>
                <P>My name is Adel Paakraad. I have always considered myself a lifelong student of the arts I had the good fortune to grow up in a family surrounded by artists So I started with painting and drawing but since I started film school about 10 years ago I truly fell in love with photography and that was the beginning of a new journey.</P> 
                <Img src={Mmbr} alt="Team member" />
            </Div>
            
            <H1>Lighting Assistant</H1>
            <Div>
                <P>My name is Adel Paakraad. I have always considered myself a lifelong student of the arts I had the good fortune to grow up in a family surrounded by artists So I started with painting and drawing but since I started film school about 10 years ago I truly fell in love with photography and that was the beginning of a new journey.</P> 
                <Img src={Mmbr} alt="Team member" />
            </Div>
        </Container>
    )
}

const Container = styled.div`
    background-image: url(${img});
    background-size: cover;
    width: 100%;
    position: absolute;
    background-color: #ffe6ff;
    padding-top: 10%;
`

const H1 = styled.h2`
    display: flex;
    justify-content: center;
`
const Div1 = styled.div`

`
const Div = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid #ff80ff;
    border-radius: 10px;
    margin: 2% 5%;
    padding: 5%;
    @media only screen and (max-width: 800px) {
        flex-wrap: wrap;
    }
`

const P = styled.p`
    margin: 2%;
`
const Img = styled.img`
    /* background-position: 50% 70%; */
    border: 2px solid white;
    border-radius: 10px;
    width: 300px;
    margin: 2%;
    @media only screen and (max-width: 800px) {
        margin: 5% 2%;
    }
`