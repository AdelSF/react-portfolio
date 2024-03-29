import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import img1 from '../../../assets/img/react-upload/kaeli-upload/1.jpg';
import img2 from '../../../assets/img/react-upload/kaeli-upload/2.jpg';
import img3 from '../../../assets/img/react-upload/kaeli-upload/3.jpg';
import img4 from '../../../assets/img/react-upload/karn-upload/1.jpg';
import img5 from '../../../assets/img/react-upload/karn-upload/2.jpg';
import img6 from '../../../assets/img/react-upload/karn-upload/3.jpg';
import img7 from '../../../assets/img/react-upload/payam-upload/Medium-10-.jpg';
import img8 from '../../../assets/img/react-upload/rowan-upload/Original-1.jpg';
// import img9 from '../../../assets/img/react-upload/payam-upload/Medium-10-.jpg';
import Rellax from "rellax";


// the svg icon works fine but my costome svg images not working- i used png
// performance issue... no strategy for file efficiency 
// first commit in new branch test


export default function Slider() {

    useEffect(() => {
        new Rellax(".img1", { // <---- Via class name
          speed: 0,
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        });

        new Rellax(".img2", { // <---- Via class name
            speed: .5,
            center: false,
            wrapper: null,
            round: true,
            vertical: false,
            horizontal: true,
            // percentage: 80
        });

        new Rellax(".img3", { // <---- Via class name
            speed: .8,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        new Rellax(".img4", { // <---- Via class name
            speed: 1.1,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
        new Rellax(".img5", { // <---- Via class name
            speed: 1.5,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
        new Rellax(".img6", { // <---- Via class name
            speed: 2.2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
        new Rellax(".img7", { // <---- Via class name
            speed: 2.5,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, []);
                    // I want to text to be larger on scroll and be adjusted to left and right
                    // line horizental if it works
    return (
        <Container>
            <Div>
                
                <Img src={img3} className="img1" alt="layer" />
                    <H1 className="img3">“Taking an image, freezing a moment, reveals how rich reality truly is.”<Div1>Anonymous</Div1></H1>
                
                <Img src={img7} className="img3" alt="layer" />
                    <H2 className="img7">“There is one thing the photograph must contain, the humanity of the moment.”<Div1>Robert Frank</Div1> </H2>
                    <H3 className="img3">“To me, photography is an art of observation. It’s about finding something interesting in an ordinary place… I’ve found it has little to do with the things you see and everything to do with the way you see them.”<Div1>Elliott Erwitt</Div1></H3>
                
                <Img src={img2} className="img2" alt="layer" /> 
                    <H4 className="img5">“I don’t trust words. I trust pictures.”<Div1>Gilles Peress</Div1></H4>
                    <H1 className="img3">“There are always two people in every picture: the photographer and the viewer.”<Div1>Ansel Adams</Div1></H1>

                <Img src={img4} className="img3" alt="layer" />
                    <H5 className="img5">“The whole point of taking pictures is so that you don’t have to explain things with words.”<Div1>Elliott Erwitt</Div1></H5>
                    <H1 className="img4">7, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                
                <Img src={img5} className="img4" alt="layer" />
                    <H1 className="img6">8, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                    <H1 className="img5">9, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                
                <Img src={img8} className="img5" alt="layer" />
                    <H1 className="img7">10, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                    <H1 className="img5">11, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
              
                <Img src={img6} className="img5" alt="layer" />
                    <H1 className="img6">12, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                    <H1 className="img5">13, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                {/* //okeye// */}
              
            </Div>
        </Container>
    )
}

const Container = styled.div`
    margin: 0;
    z-index: 5;
`


const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`
const Div1 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    color: pink;
    margin-top:2%;
`

const Img = styled.img`
    display: flex;
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

const Div3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: row;
    width: 80%;
    justify-content: flex-end;
    position: absolute; */
    margin: 10%;
`

const H1 = styled.h1`
    font-size: 1.3rem;
    color: black;
    margin: 10%;
`
const H2 = styled.h1`
    font-size: 1.3rem;
    color: white;
    margin: 10%;
`
const H3 = styled.h1`
    font-size: 1.5rem;
    line-height: 150%;
    color: purple;
    margin: 5%;
    width: 40%;
`
const H4 = styled.h1`
    font-size: 1.5rem;
    line-height: 150%;
    margin: 10%;
    width: 30%;
    float: right;
    color: black;
`
const H5 = styled.h1`
    font-size: 1.6rem;
    color: black;
    margin: 10%;
`

const Span = styled.span`
    display: flex;
    font-size: .8rem;
`
