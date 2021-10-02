import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../../../assets/img/Other/background-design.png'



export default function About(){
    return (
        <Container>
            <Div>
                <Div1>
                    <H1>Director</H1>
                    <P>My name is Adel Paakraad. I have always considered myself a lifelong student of the arts. I had the good fortune growing up in a family surrounded by artists; that's why I started painting and drawing at a young age. But since I started film school in 2011, I truly fell in love with photography, which was the beginning of a new journey.</P>
                    <P>Since beginning photography, my passion has been to capture the beauty and the simplicity in people's lives. As I learn more about them, I use their stories as an inspiration to create art.</P> 
                </Div1>
                <Img src={"https://icecube-us-303.icedrive.io/thumbnail?p=mxbPN8r2D0yQuC%2BLkr%2BBgz1cTZ8nngrkzL9J7XLlOhuDNghttX3Z9NVbOtE7H7dq0GmF8Hj9zOrdSgqHojK5zednNOK47f%2BBQ%2BGhLTYR%2FtBSvOWpFN%2BPt6xYs5qeSO5t&w=1280&h=1280&m=cropped"} alt="Team member" />
            </Div>
            
            <Div>
                <Div1>
                    <H1>Technical Advisor</H1>
                    <P>Payam Jafari is a screenwriter, director, and painter based in Tehran. He got his Master's in motion picture and television directing at the Academy of Art University in San Francisco in 2017 and Sooreh Art University in Tehran. Since his graduation, he has worked with leading actors, producers, and artists in the United States and Iran.</P> 
                </Div1>
                <Img src={"https://icecube-us-303.icedrive.io/thumbnail?p=Eunzkuqy9wwyDuteHmDh5AakDIGnIQeOV3o3ztqPDIZXyiPFB1HaWDEytss%2FEBd6De7FJeedqccy2rFETDRp1MZ1UdBlMhdt5A%2Fzu4JqxbFv3Bm1Wcz2QhLQF5Z81Wf0&w=1280&h=1280&m=cropped"} alt="Team member" />
            </Div>

            <Div>
                <Div1>
                    <H1>Illustrator - Editor</H1>
                        <P>Neda Lorestani is a graphic designer, painter, and photo editor based in Tehran. She got her Bachelor's in Art University in Kermanshah in 2016 and has had over a decade of experience in painting and drawing. Since her graduation, she has been working with various companies on various projects.</P> 
                </Div1>
                <Img src={"https://icecube-us-303.icedrive.io/thumbnail?p=PpHEPu41jPPsfVcMsSe3HGfjpXVjbPPTlF%2FKEwpi0IGITPjCidxJ4dm6pOthF%2B3JCSXufgparUas3vuuYpYDryHsQ2EKYk06uRlIlUWvY%2B%2BM3r%2F7AL91cMOnkp4LeoX9&w=1280&h=1280&m=cropped"} alt="Team member" />
            </Div>

        </Container>
    )
}

const Container = styled.div`
    background-image: url(${img});
    background-size: cover;
    width: 100%;
    /* position: absolute; */
    background-color: #ffffe6;
    padding-top: 8%;
`

const H1 = styled.h2`
    display: flex;
    justify-content: center;
    margin: 5%;
`
const Div1 = styled.div`

`
const Div = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid #ff80ff;
    border-radius: 10px;
    margin: 2% 5%;
    /* padding: 5%; */
    @media only screen and (max-width: 800px) {
        flex-wrap: wrap;
    }
`

const P = styled.p`
    margin: 5%;
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