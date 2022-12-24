import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import styled from 'styled-components';
import UploadForm from './UploadForm';



export default function Galleria() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
        <UploadForm />
        <Div>
            <H2>Photo Gallery</H2>
        </Div>
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
    </>
  );
}


const Div = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    width: 150px;
    @media only screen and (max-width: 600px) {
        width: 100px;
        height: 70px;
  }
`

const H2 = styled.h1`
    font-size: 3rem;
    color: white;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    @media only screen and (max-width: 1000px) {
        font-size: 2rem;
  }

`