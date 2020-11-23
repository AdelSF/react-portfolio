import React, { useRef, useEffect } from "react";
import styled from 'styled-components'
import Landing from '../landing'
import Content from './Content'
import Art from '../art/Art'
import Rellax from "rellax";







export default function Home() {

    return (
        <Background>
            <Landing />
            <Content />
        </Background>
    )
}

const Background = styled.div`
    justify-content: center;
    align-items: center;
    /* background-position: 50% 70%; */
    height: 100vh;
    /* position: absolute; */
    /* background-color: black; */
`