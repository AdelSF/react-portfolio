import React, { useState } from 'react';
import styled from 'styled-components';





export default function Shop(){
    return (
        <Container>
            <H2>No Product Available Now</H2>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
`
const H2 = styled.h2`
   color: white;
`
