import React, { useState } from 'react';
import styled from 'styled-components';
import bg from '../../../assets/img/Other/barg.jpg';



export default function About(){
    return (
        <Container>
            <H1>Photographer - Director</H1>
            <Div>
                <P>Adel Pakrad</P> 
            </Div>

            <H1>Videographer - Creative Director</H1>
            <Div>
                <p>sam javadi</p>
            </Div>

            <H1>Make Up Artist - Light Assistant</H1>
            <Div>
                <p>Fatima</p>
            </Div>

            <H1>Editor</H1>
            <Div>
                <p>Editor</p> 
            </Div>
        
        </Container>
    )
}

const Container = styled.div`
    background-image: url(${bg});
    background-size: cover;
    width: 100%;
    position: absolute;
    /* height: 100vh; */
`

const H1 = styled.h2`
    display: flex;
    justify-content: center;
    padding-top: 10%;
    color: lightgray;
`
const Div1 = styled.div`

`
const Div = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid gray;
    margin: 2% 5%;
    padding: 5%;
`

const P = styled.p`

`

const Div2 = styled.div`

`