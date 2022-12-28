import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import img from '../../../assets/img/Other/background-design.png'
import relaxImg from '../../../assets/img/Other/listening-to-ocean.jpeg'
import { Parallax } from "react-parallax";
import Before from '../../../assets/img/Other/Autmn-1-min.jpg' // check for optimization later
import After from '../../../assets/img/Other/Autmn-2-min.jpg'
import me from '../../../assets/img/Other/me-minified.png'
import cam1 from '../../../assets/img/Other/cam1.png';
import cam2 from '../../../assets/img/Other/cam2.png'
import { Link } from 'react-router-dom';
import ReactCompareImage from 'react-compare-image';





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
            <Comparison>
                <ComparingQoute>There Is More Than Just A Photo...</ComparingQoute>
                <PNote>Drag the middle line to left and right.</PNote>
                <ReactCompareImage leftImage={Before} rightImage={After} />
            </Comparison>
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
                <P>My name is Adel Paakraad. I have always considered myself a lifelong student of the arts. I had the good fortune growing up in a family surrounded by artists; that's why I started painting and drawing at a young age. But since I started film school in 2011, I truly fell in love with photography, which was the beginning of a new journey.</P>
                <P>Since beginning photography, my passion has been to capture the beauty and the simplicity in people's lives. As I learn more about them, I use their stories as an inspiration to create art.</P> 
                <P>Depending on the project, sometimes I work with other team members like videographers, makeup artists, photo editors, and light assistants. Learn more <Link to="/about">ABOUT US</Link>.</P>    
                <P>If you like to be part of my art project, schedule a 30 minutes video-call at <Link to='/booking' >BOOKING</Link> and learn more about it.</P>
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
const ComparingQoute = styled.h1`
    display: flex;
    justify-content: center;
    padding-top: 8%;
    width: 100%;
    font-Size: 1.8rem;
    @media only screen and (max-width: 800px) {
        font-size: 1.2rem;
    }
`
const PNote = styled.p`
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 800px) {
        font-size: .8rem;
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
    margin: 4%;
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
const Comparison = styled.div`
    margin: 2% 10%;
    padding: 0 10%;
    @media only screen and (max-width: 1000px) {
        margin: 2% 5%;
        padding: 0 5%;
    }
    @media only screen and (max-width: 800px) {
        margin: 2%;
        padding: 4% 0;
    }
`
