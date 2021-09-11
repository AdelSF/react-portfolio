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
`