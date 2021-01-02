import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import First from '../../../assets/img/png-upload/1.png';
import Second from '../../../assets/img/png-upload/2.png';
import Third from '../../../assets/img/png-upload/3.png';
import Fourth from '../../../assets/img/png-upload/4.png';
import FirstSm from '../../../assets/img/png-upload/1-1.png';
import SecondSm from '../../../assets/img/png-upload/2-2.png';
import ThirdSm from '../../../assets/img/png-upload/3-3.png';
import FourthSm from '../../../assets/img/png-upload/4-4.png';
import Rellax from "rellax";


// the svg icon works fine but my costome svg images not working- i used png



export default function Landing() {

    useEffect(() => {
        new Rellax(".fourth", { // <---- Via class name
          speed: -2,
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        });

        new Rellax(".third", { // <---- Via class name
            speed: -.9,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        new Rellax(".second", { // <---- Via class name
            speed: 0,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        new Rellax(".first", { // <---- Via class name
            speed: 1,
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
                <H1 className="fourth">"THE EARTH IS ART, THE PHOTOGRAPHER IS ONLY A WITNESS." <Div3>Thomas Merton</Div3></H1>
                
            </Div2>
        </Container>
    )
}

const Container = styled.div`
    margin: 0;
    z-index: 5;
`

const Div = styled.div`
    display: flex;
    width: 100%;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`
const DivSm = styled.div`
    display: none;
    width: 100%;
    @media only screen and (max-width: 600px) {
        display: flex;
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
