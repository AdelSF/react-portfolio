import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import img from '../../../assets/img/Other/3.png'
import relaxImg from '../../../assets/img/Other/Kaeli-1.jpg'
import { Parallax } from "react-parallax";
import me from '../../../assets/img/Other/meme.png'
import cam1 from '../../../assets/img/Other/cam1.png';
import cam2 from '../../../assets/img/Other/cam2.png'



export default function Content() {
    const [blinkingLens, setBlinkingLens] = useState("none");

 

    useEffect(() => {
        const interval = setInterval(() => {
            if (blinkingLens === "none"){
                setBlinkingLens("flex")
            } else {
                setBlinkingLens("none")
                console.log("one time")
            }
        }
        , 800); 
        return () => clearInterval(interval);
      });

    
    return (
        <Container>
            <H1>How it works</H1>
            <Div>
                <ReactPlayer url='https://www.youtube.com/watch?v=78mUgHDRTag' controls={true}/> 
            </Div>
            <Parallax bgImage={ relaxImg }>
                <Div2>
                    <H3>Capture The Moment</H3>
                </Div2>
            </Parallax>
            <Div3>
                <H2>About The Artist</H2>
                  <Parallax bgImage={ me }>
                    <Div4>
                        <Box>
                            <Image1 style={{display: blinkingLens}} src={ cam1 }/>
                            <Image2 src={ cam2 }/>
                        </Box>
                    </Div4>
                </Parallax>
                <P>My name is Adel Paakraad. I have always considered myself a lifelong student of the arts I had the good fortune to grow up in a family surrounded by artists So I started with painting and drawing but since I started film school about 10 years ago I truly fell in love with photography and that was the beginning of a new journey.</P>
                <P>Since my beginning in photography, my passion was to capture beauty and simplicity in people’s lives and during all these years and work with different people I developed 3 simple steps from beginning to the end for each session, see the <A href="../booking">BOOKING</A> section to schedule a time to start.</P>
                <P>As the director of the photography team, I work with other team members, a videograher, makeup artist, photo editor and light assistant are working with us during the photography session. Learn more about the team in <A href="../about">ABOUT US</A>.</P>       
            </Div3>
    
        </Container>
    )
}

const Container = styled.div`
    margin-top: 63%;
    background-image: url(${img});
    background-size: contain;
    background-color:  #e6eeff;
    @media only screen and (max-width: 600px) {
        margin-top: 135%;
        position: absolute;
        width: 100%;
        z-index: 10;
    }
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
    margin: 10% 20% 0 20%;  
    border: 1px solid gray;
    padding: 2%;
    @media only screen and (max-width: 600px) {
        margin: 5% 5% 0 5%;  
        border: 1px solid gray;
        padding: 2%;
    }  
`
const Div4 = styled.div`
    height: 350px;
    /* width: 600px; */
    /* margin: 5% 20%;   // smaller screen I need smaller argin @media query */
    border: 3px solid black;
    @media only screen and (min-width: 1500px) {
        height: 500px;
    }  
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
    @media only screen and (max-width: 600px) {
        font-size: 3rem;
        font-weight: bold;
    }
`

const P = styled.p`
    display: block;
    font-size: 1rem;
    margin: 5%;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`
const A = styled.a`
    text-decoration: none;
    color: blue;
`

const Image1 = styled.img`
    /* display: {{blinkingLens}}; */
    background-position: 50% 50%;
    background-size: contain;
    position: absolute;
    width: 80%;
    height: 100%;
`
const Image2 = styled.img`
    background-position: 50% 50%;
    background-size: contain;
    position: absolute;
    display: flex;
    width: 80%;
    height: 100%;
`

