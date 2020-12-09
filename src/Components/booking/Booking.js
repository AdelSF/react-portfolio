import React, { useState } from 'react';
import styled from 'styled-components';
import { InlineWidget } from "react-calendly";
import img from '../../../assets/img/Other/3.png';





export default function Booking(){
    return (
        <Container> 
            <Div>
                <InlineWidget url="https://calendly.com/paakraad-art" />
            </Div>
        </Container>
    )
}


// style in mobile size needed via mediaQuery

const Container = styled.div`
    background-image: url(${img});
    background-size: contain;
    background-color:  #e6eeff;
    height: 100vh;
    width: 100%;
`


const Div = styled.div`
    padding-top: 5%;
`
