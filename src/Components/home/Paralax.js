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
            <Div>
                <Img src={Fourth} className="fourth" alt="layer" />
                <Img src={Third} className="third" alt="layer" />
                <Img src={Second} className="second" alt="layer" />
                <Img src={First} className="first" alt="layer" />
            </Div>
            <DivSm>
                <Img src={FourthSm} className="fourth" alt="layer" />
                <Img src={ThirdSm} className="third" alt="layer" />
                <Img src={SecondSm} className="second" alt="layer" />
                <Img src={FirstSm} className="first" alt="layer" />
            </DivSm>
            <Div2>
                <H1 className="fourth">"THE EARTH IS ART, THE PHOTOGRAPHER IS ONLY A WITNESS." <Div3>Thomas Merton</Div3>
                    <Div4><P><I></I><I></I><I></I></P></Div4>
                </H1>
            </Div2>
        </Container>
    )
}

const Container = styled.div`
    margin: 0;
    /* display: flex; */
    /* height: 100%; */
    /* width: 100%; */
    /* position: relative ; */
    /* z-index: 1; */
`

const Div = styled.div`
    display: flex;
    width: 100%;
    @media (max-width: 600px) {
        display: none;
    }
`
const DivSm = styled.div`
    display: none;
    width: 100%;
    @media (max-width: 600px) {
        display: none;
    } 
`


const Img = styled.img`
    /* background-position: 50% 70%; */
    position: absolute;
    width: 100%;
`

const Div2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: flex-end;
    position: absolute;
    margin: 10%;
    @media only screen and (max-width: 600px) {
        margin-top: 25%
    }
`
const Div3 = styled.div`
    display: block;
    color: lightpink;
    padding-top: 5%;
    opacity: .8;
`
const Div4 = styled.div`
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

const H1 = styled.h1`
    font-size: 1.3rem;
    color: white;
    margin: 5%;
    width: 250px;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-size: 1.1rem;
    line-height:1.5rem;
    opacity: .8;
    @media only screen and (max-width: 600px) {
        display: none;
        font-size: 1.3rem;
        color: white;
        /* margin: 5%; */
        width: 150px;
        font-size: .8rem;
        line-height:1.2rem;
    } 
`

const H2 = styled.h4`
    display: flex;
    flex-direction: column;
`

const Span = styled.span`
    display: flex;
    font-size: .8rem;
`
const P = styled.p`
    color: white;
    display: flex;
    flex-direction: column;
`
const I = styled.i`
    margin: 2px;
    color: white;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border: solid white;
    border-width: 0 5px 5px 0;
    padding: 5px;
`