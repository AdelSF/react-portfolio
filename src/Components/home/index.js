import React, { useRef, useEffect } from "react";
import styled from 'styled-components'
import Landing from '../landing'
import Content from './Content'
import Art from '../art/Art'



export default function Home() {

    return (
        <>
            <Landing />
            <Content />
        </>
    )
}

const Div = styled.div`
    
`