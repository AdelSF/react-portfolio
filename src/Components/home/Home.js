import React, { useRef, useEffect } from "react";
import styled from 'styled-components'
import Paralax from './Paralax'
import Content from './Content'



export default function Home() {

    return (
        <>
            <Div>
                <Paralax />
            </Div>
            <Content />
        </>
    )
}

const Div = styled.div`
    height: 110vh;
    width: 100%;
    @media (max-width: 1300px) { // all good just not working for 2 screen sizes ( 2 XL pixel and Iphone X)
        height: 85vh;
    } 
    @media (max-width: 1025px) {
        height: 65vh;
    } 
    @media (max-width: 800px) {
        height: 50vh;
    } 
    @media (max-width: 600px) {
        height: 100vh;
    } 
    @media (max-width: 500px) {
        height: 75vh;
    } 
    @media (max-width: 425px) {
        height: 70vh;
    } 
    @media (max-width: 415px) { // not working with 2 XL size screen
        height: 75vh;
    } 
    @media (max-width: 374px) { // works for iphone 6 - 7 - 8 and plus,  but not for Iphone x
        height: 70vh;
    } 
    @media (max-width: 369px) {
        height: 75vh;
    } 
    @media (max-width: 300px) {
        height: 60vh;
    } 
`