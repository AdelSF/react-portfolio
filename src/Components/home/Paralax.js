import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import First from '../../../assets/img/parallax-imgs/svg/1.svg';
import Second from '../../../assets/img/parallax-imgs/svg/2.svg';
import Third from '../../../assets/img/parallax-imgs/svg/3.svg';
import Fourth from '../../../assets/img/parallax-imgs/svg/4.svg';
import FirstSm from '../../../assets/img/parallax-imgs/svg/1-1.svg';
import SecondSm from '../../../assets/img/parallax-imgs/svg/2-2.svg';
import ThirdSm from '../../../assets/img/parallax-imgs/svg/3-3.svg';
import FourthSm from '../../../assets/img/parallax-imgs/svg/4-4.svg';
import Rellax from "rellax";


export default function Landing() {

//     const [scrolling, setScrolling] = useState("Flex")

//    useEffect(() => {
//     console.log(window.pageYOffset)
//     console.log("hi")
//    })

    useEffect(() => {
        new Rellax(".fourth", { // <---- Via class name
          speed: -5,
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        });

        new Rellax(".third", { // <---- Via class name
            speed: -3,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        new Rellax(".second", { // <---- Via class name
            speed: -1.5,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        new Rellax(".first", { // <---- Via class name
            speed: 0,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, []);

    return (
        <Container>
            <SvgBoxLrgScreen>
                <Img src={Fourth} className="fourth" alt="layer" />
                <Img src={Third} className="third" alt="layer" />
                <Img src={Second} className="second" alt="layer" />
                <Img src={First} className="first" alt="layer" />
            </SvgBoxLrgScreen>
            <SvgBoxSmlScreen>
                <Img src={FourthSm} className="fourth" alt="layer" />
                <Img src={ThirdSm} className="third" alt="layer" />
                <Img src={SecondSm} className="second" alt="layer" />
                <Img src={FirstSm} className="first" alt="layer" />
            </SvgBoxSmlScreen>
            <TextBox>
                <Qoute className="fourth">"THE EARTH IS ART, THE PHOTOGRAPHER IS ONLY A WITNESS." <NameBox>Thomas Merton</NameBox>
                    <ArrowBox><P><ArrowDown></ArrowDown><ArrowDown></ArrowDown><ArrowDown></ArrowDown></P></ArrowBox>
                </Qoute>
            </TextBox>
        </Container>
    )
}

const Container = styled.div`
    margin: 0;
`

const SvgBoxLrgScreen = styled.div`
    display: flex;
    width: 100%;
    @media (max-width: 600px) {
        display: none;
    }
`
const SvgBoxSmlScreen = styled.div`
    display: none;
    @media (max-width: 600px) {
        width: 100%;
        display: flex;
    } 
`


const Img = styled.img`
    /* background-position: 50% 70%; */
    position: absolute;
    width: 100%;
    /* border: 1px solid black; */
`

const TextBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: flex-end;
    position: absolute;
    margin: 10%;
    @media only screen and (max-width: 600px) {
        margin-top: 25%;
        justify-content: center;
    }
`
const NameBox = styled.div`
    display: block;
    color: lightpink;
    padding-top: 5%;
    opacity: .8;
    font-size: 1rem;
    @media only screen and (max-width: 900px) {
        font-size: .8rem;
    } 
    @media only screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        font-size: .6rem;
    } 
`
const ArrowBox = styled.div`
    /* display: ${scrolling}; */
    margin: 0 auto;
    width: 18px;
    color: lightpink;
    opacity: .4;
    animation: blink-animation 1s steps(5, start) infinite;
    -webkit-animation: blink-animation 2s steps(5, start) infinite;
    @keyframes blink-animation {
        to {
            visibility: hidden;
        }
    }
    @-webkit-keyframes blink-animation {
        to {
            visibility: hidden;
        }
    }
    @media (max-width: 1000px) {
        display: none;
    }
`

const Qoute = styled.h1`
    color: white;
    margin: 5%;
    width: 250px;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-size: 1.1rem;
    line-height:1.5rem;
    opacity: .8;
    text-align: center;
    @media only screen and (max-width: 900px) {
        width: 150px;
        font-size: .8rem;
        line-height:1.2rem;
    } 
    @media only screen and (max-width: 600px) {
        font-size: .8rem;
        line-height:1.1rem;
    } 
`

const P = styled.p`
    color: white;
    display: flex;
    flex-direction: column;
`
const ArrowDown = styled.i`
    margin: 2px;
    color: white;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border: solid white;
    border-width: 0 5px 5px 0;
    padding: 5px;
`
