import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import bg from '../../../assets/img/Other/art-pic-7.jpg';





export default function Art(){
    return (
        <Container>
            <H1>Drawing With Pencil</H1>
            <Div>
                <ReactPlayer url='https://www.youtube.com/watch?v=cj5LdK3s5-Q' controls={true}/> 
            </Div>
            {/* <H1>More content is coming soon</H1> */}
            {/* <H1>San Francisco Mural</H1>
            <Div>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true}/> 
            </Div> */}
        </Container>
    )
}

const Container = styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-color:  #e6eeff;
    width: 100%;
`

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    padding-top: 10%;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin: 2% 5%;
    padding: 5%;
    border: 1px solid gray;
`