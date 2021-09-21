import React, { useState } from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import LinkJson from '../../../assets/json/imgLinks.json';
import img from '../../../assets/img/Other/background-design.png';
// import Vector from '../../../assets/img/Other/vector-1.png'


export default function Gallery(){
    return (
        <>
            <Container>
              <HeaderOfPage>
                <H2>Photo Gallery</H2>
                {/* <img src={Vector} /> */}
              </HeaderOfPage>
              <ImgGalleryBox>
                {LinkJson.map((images, i) => {
                  return( <Div>
                              {/* <H2>Session Number: {i+1}</H2> */}
                              <ImageGallery items={images} autoPlay={true} lazyLoad={true} slideDuration={1500} key={i} slideInterval={5000} thumbnailPosition={"left"} showBullets={true}/>
                          </Div>
                )})}
              </ImgGalleryBox>
            </Container>
        </>
    );
}

const Container = styled.div`
    justify-content: center;
    border-radius: 5px;
    background-image: url(${img});
    background-size: contain;
    background-color:  #e6eeff;
`
const Div = styled.div`
  border: 2px solid lightblue;
  border-radius: 5px;
  margin: 30px auto;
  padding: 1%;
  width: 80%;
  @media only screen and (max-width: 800px) {
    padding: 0;
    width: 99%;
  }
`
const HeaderOfPage = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  border-radius: 5px;
  margin: 0 auto;
  padding: 1%;
`
const H2 = styled.h2`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    font-size: 1rem;
  }
`
const ImgGalleryBox = styled.div`
  margin: 2%;
  padding: 2%;
  @media only screen and (max-width: 800px) {
    margin: 0;
    padding: 0; 
  }
`
