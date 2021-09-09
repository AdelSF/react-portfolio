import React, { useRef, useEffect } from "react";
import styled from 'styled-components'
import Paralax from './Paralax'
import Content from './Content'



export default function Home() {

    return (
        <>
            <Paralax />
            <Content />
            {/* <p>Hi</p> */}
        </>
    )
}

const Div = styled.div`
    
`