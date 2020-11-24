import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import First from '../../../assets/img/png-upload/1.png';
import Second from '../../../assets/img/png-upload/2.png';
import Third from '../../../assets/img/png-upload/3.png';
import Fourth from '../../../assets/img/png-upload/4.png';
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
            <Div2>
                <H1 className="fourth">THE EARTH IS ART, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
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
`

const H1 = styled.h1`
    font-size: 1.3rem;
    color: white;
    margin: 5%;
    width: 250px;
    display: flex;
`

const Span = styled.span`
    display: flex;
    font-size: .8rem;
`
