import React, { useState } from 'react';
import styled from 'styled-components';
import Gallery from 'react-grid-gallery';
import img from '../../../assets/img/Other/3.png'


const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]


export default function Photography(){
    return (
        <Container>
            <H1>Hello from Photography 1 section</H1>
            <Div>
                <Gallery images={IMAGES}/>
                {/* document.getElementById('example-0') */}
            </Div>
       
        </Container>
    )
}


const Container = styled.div`
    background-image: url(${img});
    background-size: contain;
    background-color:  #e6eeff;
`
const Div = styled.div`
    width: 100%;
    height: 100%;
`
const H1 = styled.h1`
    margin: 10%;
`