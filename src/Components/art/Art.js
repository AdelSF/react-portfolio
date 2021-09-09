import React, { useState } from 'react';
import styled from 'styled-components';





export default function Art(){
    return (
        <Container>
            <H1>Videos</H1>
            <Session>
                <Video>
                <Iframe src="https://www.youtube.com/embed/cj5LdK3s5-Q" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>                </Video>
                <Description>
                    <P>session num: 1</P>
                    <P>session Model: Name</P>
                    <P>session location: </P>
                </Description>
            </Session>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
`
const Session = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 2% 5%;
    padding: 5% 0;
    border: 1px solid gray;
`

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    padding-top: 10%;
    color: white;
`

const P = styled.p`
    color: white;
`

const Description = styled.div`

`
const Iframe = styled.iframe`
    width: 500px;
    height: 300px;
`

const Video = styled.div`
    width: 500px;
    height: 400px;
    padding: 20px;
    border: 1px solid gray;
`