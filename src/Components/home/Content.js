import React, { useRef, useEffect } from "react";
import styled from 'styled-components'
import ReactPlayer from 'react-player'
// import { animations } from 'react-animation'





export default function Content() {
    
    // const style = {
    //     animation: animations.popIn
    //   }

    return (
        <Container>
            <H2>How it works</H2>
            {/* <Div2> */}
                {/* <H2>How it works</H2> */}
                {/* <p>everything explained in just 5 minutes</p> */}
            {/* </Div2> */}
            <Div>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> 
            </Div>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>
            <H2>How it works</H2>

        </Container>
    )
}

const Container = styled.div`
    margin-top: 63%;
    color: white;
    background-color: black;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin: 2% 5%;
    padding: 5%;
    border: 1px solid gray;
`
const Div2 = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    /* width: 50%; */
    margin: 2%;
    padding: 2%;
    border: 1px solid gray;
`

const H2 = styled.h2`
    display: flex;
    justify-content: center;
    margin: 1%;
    padding: 2%;

`