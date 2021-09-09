import React, { useState } from 'react';
import styled from 'styled-components';





const images = [
    '../../../assets/img/react-upload/kaeli-upload/1.jpg',
    '../../../assets/img/react-upload/kaeli-upload/2.jpg',
    '../../../assets/img/react-upload/kaeli-upload/3.jpg',
    '../../../assets/img/react-upload/karn-upload/1.jpg',
    '../../../assets/img/react-upload/karn-upload/2.jpg',
    '../../../assets/img/react-upload/karn-upload/3.jpg',
    '../../../assets/img/react-upload/payam-upload/Medium-10-.jpg',
    '../../../assets/img/react-upload/rowan-upload/Original-1.jpg'
]

export default function Photography(){
    return (
        <Container>
            <p>photography</p>
            <p>photography</p>
            <p>photography</p>
            <p>photography</p>
            <p>photography</p>
        </Container>
    )
}


const Container = styled.div`
position: absolute;
    margin: 0;
    padding: 0;
`
