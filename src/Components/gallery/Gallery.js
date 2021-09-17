import React, { useState } from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import LinkJson from '../../../assets/json/imgLinks.json';
import Vector from '../../../assets/img/Other/vector-1.png'


export default function Gallery(){
    return (
        <>
            <Container>
              <Div2>
                <H2>Photo Gallery</H2>
                {/* <img src={Vector} /> */}
              </Div2>
              <ImgGalleryBox>
                {LinkJson.map((images, i) => {
                  return( <Div>
                              {/* <H2>Session Number: {i+1}</H2> */}
                              <ImageGallery items={images} autoPlay={true} slideDuration={1500} key={i} thumbnailPosition={"left"} showBullets={true}/>
                          </Div>
                )})}
              </ImgGalleryBox>
            </Container>
        </>
    );
}

const Container = styled.div`
  margin-top: 5%;
  justify-content: center;
  border-radius: 5px;
`
const Div = styled.div`
  border: 2px solid lightblue;
  border-radius: 5px;
  margin: 30px auto;
  padding: 1%;
  width: 80%;
`
const Div2 = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid gray;
  width: 30%;
  border-radius: 5px;
  margin: 0 auto;
  padding: 1%;
`
const H2 = styled.h2`
  display: flex;
  color: white;
  justify-content: center;
`
const ImgGalleryBox = styled.div`
  margin: 2%;
  padding: 2%;
`
