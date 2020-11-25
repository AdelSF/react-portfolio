import React, { useRef, useEffect } from "react";
import styled from 'styled-components'
import ReactPlayer from 'react-player'
// import { animations } from 'react-animation'
import img from '../../../assets/img/Other/3.png'





export default function Content() {
    
    // const style = {
    //     animation: animations.popIn
    //   }

    return (
        <Container>
            {/* <Div3></Div3> */}
            <H2>How it works</H2>

            <Div>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> 
            </Div>
            <Div>
                <Button>Art Gallery</Button>
                <Button>Photo collection</Button>

            </Div>
            <Div>
                <H2>About the artist</H2>
                <H2>About the artist</H2>
                <H2>About the artist</H2>
                <H2>About the artist</H2>
            </Div>
    
        </Container>
    )
}

const Container = styled.div`
    margin-top: 63%;
    background-image: url(${img});
    background-size: contain;
    background-color: gray;
    /* background-repeat: no-repeat; */
    /* color: white; */
    /* background-color: black; */
    /* background-size: auto; */
    /* opacity: .5; */
    /* height: 100%;*/
    /* width: 100%;  */
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin: 2% 5%;
    padding: 5%;
    border: 1px solid lightgray;
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
const Div3 = styled.div`
    background-color: pink;
    width: 100%;
    height: 200px;
`

const H2 = styled.h2`
    display: flex;
    justify-content: center;
    margin: 1%;
    padding-top: 8%;
    /* background-color: pink; */

`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    font-size: 1.1rem;
    border-radius: 5px;
    height: 40px;
    width: 200px;
    margin: 2%;
    /* background-color: pink; */
`