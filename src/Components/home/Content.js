import React, { useRef, useEffect } from "react";
import styled from 'styled-components'
import ReactPlayer from 'react-player'
// import { animations } from 'react-animation'
import img from '../../../assets/img/Other/3.png'
import relaxImg from '../../../assets/img/Other/Kaeli-1.jpg'
import { Parallax } from "react-parallax";
import me from '../../../assets/img/Other/meme.png'
import lens from '../../../assets/img/Other/Ax3.png'
// import howItWorks from '../../../assets/video/1min-test.mp4'



export default function Content() {
    

    return (
        <Container>
            <H1>How it works</H1>
            <Div>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true}/> 
            </Div>
            <Parallax bgImage={ relaxImg }>
                <Div2>
                    <H3>Feel The Present</H3>
                </Div2>
            </Parallax>
            <Div3>
                <H2>About The Artist</H2>
                <P>My name is Adel Paakraad. I have always considered myself a lifelong student of the arts I had the good fortune to grow up in a family surrounded by artists So I started with painting and drawing but since I started film school about 10 years ago I truly fell in love with photography and that was the beginning of a new journey.</P>
                <P>Since my beginning in photography, my passion was to capture beauty and simplicity in people’s lives and during all these years and work with different people I developed 3 simple steps that help you get the best results in a short amount of time, you will find more information HERE.</P>            
                <P>As the director of the photography I work with other members of the team, a professional videograher, makeup artist, photo editor and light assistant are working with us during the photography session. Learn about the team more HERE.</P>    
                <Parallax bgImage={ me }>
                    <Div4>
                        <Box></Box>
                    </Div4>
                </Parallax>
                <P>My name is Adel Paakraad. I have always considered myself a lifelong student of the arts I had the good fortune to grow up in a family surrounded by artists So I started with painting and drawing but since I started film school about 10 years ago I truly fell in love with photography and that was the beginning of a new journey.</P>
                <P>Since my beginning in photography, my passion was to capture beauty and simplicity in people’s lives and during all these years and work with different people I developed 3 simple steps that help you get the best results in a short amount of time, you will find more information HERE.</P>            
                <P>As the director of the photography I work with other members of the team, a professional videograher, makeup artist, photo editor and light assistant are working with us during the photography session. Learn about the team more HERE.</P>       
                </Div3>
    
        </Container>
    )
}

const Container = styled.div`
    margin-top: 63%;
    background-image: url(${img});
    background-size: contain;
    background-color:  #e6eeff;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin: 2% 5%;
    padding: 5%;
    border: 1px solid gray;
`
const Div2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 750px;
    width: 100%;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
`
const Div3 = styled.div`
    /* height: 1000px; */
    margin: 10% 20% 0 20%;  // smaller screen I need smaller argin @media query
    border: 1px solid gray;
    padding: 5%;
`
const Div4 = styled.div`
    height: 400px;
    /* width: 600px; */
    /* margin: 5% 20%;   // smaller screen I need smaller argin @media query */
    border: 3px solid black;
`

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    margin: 1%;
    padding-top: 8%;
    width: 100%;
`
const H2 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 2%; */
    border-bottom: 2px solid lightgray;
`
const H3 = styled.h1`
    font-family: serif, cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    font-weight: bold;
    opacity: .5;
`

const P = styled.p`
    display: block;
    font-size: 1.3rem;
    margin: 5%;
`

const Box = styled.div`
    background-image: url(${lens});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    display: block;
    width: 100%;
    height: 100%;
`




// const Button = styled.button`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 2px solid black;
//     font-size: 1.1rem;
//     border-radius: 5px;
//     height: 40px;
//     width: 200px;
//     margin: 2%;
// `