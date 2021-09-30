import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import img from '../../../assets/img/Other/background-design.png'
import relaxImg from '../../../assets/img/Other/listening-to-ocean.jpeg'
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
            }
        }
        , 800); 
        return () => clearInterval(interval);
      });

    
    return (
        <Container>
            <H1>Behind The Scene</H1>
            <VideoBox>
                <Iframe src="https://www.youtube.com/embed/78mUgHDRTag" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></Iframe>
            </VideoBox>
            <Parallax bgImage={ relaxImg }>
                <TextBoxOnparallax>
                    <H3>Capture The Moment</H3>
                </TextBoxOnparallax>
            </Parallax>
            <AboutSection>
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
                <P>As the director of the photography team, I work with other team members, a videograher, makeup artist, photo editor and light assistant. </P>    
                   {/* Learn more about the team in <A href="../about">ABOUT US</A>. */}
            </AboutSection>
        </Container>
    )
}

const Container = styled.div`
    background-image: url(${img});
    background-size: contain;
    background-color:  #e6eeff;
    position: relative;
    z-index: 2;
    @media only screen and (max-width: 600px) {
        position: absolute;
    }
`

const VideoBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 5%;
    border: 1px solid gray;
    height: 500px;
    @media only screen and (max-width: 800px) {
        margin: 2%;
    }
`
const Iframe = styled.iframe`
    width: 60%;
    height: 400px;
    justify-content: center;
    margin: 50px auto;
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    padding-top: 8%;
    width: 100%;
    @media only screen and (max-width: 800px) {
        font-size: 1.5rem;
    }
`

const TextBoxOnparallax = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 750px;
    width: 100%;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
`
const AboutSection = styled.div`
    margin: 10% 20% 0 20%;  
    border: 1px solid gray;
    padding: 2%;
    @media (max-width: 600px) {
        margin: 5% 5% 0 5%;  
        border: 1px solid gray;
        padding: 2%;
    }  
`
const Div4 = styled.div`
    height: 350px;
    border: 3px solid black;
    @media (min-width: 1500px) {
        height: 500px;
    }  
`

const H2 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2%;
    border-bottom: 2px solid lightgray;
    @media only screen and (max-width: 800px) {
        font-size: 1rem;
    }
`
const H3 = styled.h1`
    font-family: serif, cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    font-weight: bold;
    opacity: .5;
    @media only screen and (max-width: 800px) {
        font-size: 2rem;
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
    background-position: 50% 50%;
    background-size: contain;
    position: absolute;
    width: 80%;
    height: 100%;
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`
const Image2 = styled.img`
    background-position: 50% 50%;
    background-size: contain;
    position: absolute;
    display: flex;
    width: 80%;
    height: 100%;
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`

