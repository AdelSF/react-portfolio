import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import LinkJson from '../../../assets/json/imgLinks.json';
import allRandomLinks from '../../../assets/json/allRandomLinks.json';
import img from '../../../assets/img/Other/background-design.png';
import { Link } from 'react-router-dom';
import ModelAlbum from './ModelAlbum.js';


export default function TopImgs({childToParent, data}){

 
    return (
        <>
            <HeaderOfPage>
              <H2>Photo Gallery</H2>
            </HeaderOfPage>
            <Container>
                {data.map((model) => {
                  console.log("data injas", model)
                  return(
                    <>
                      <RandomDiv>
                        <RandomImgBox>
                          {/* <Link to='/model'> */}
                            <Img src={model.topImg} onClick={() => childToParent(model.id)} key={model.id}></Img>
                          {/* </Link> */}
                          {/* <H2>salam</H2> */}
                        </RandomImgBox>
                      </RandomDiv>
                  </>
                  )  
                })}
            </Container>
            <H2>here</H2>
        </>
    );
}



const Container = styled.div`
  margin: 0 auto;
  grid-gap: 10px;
`

const HeaderOfPage = styled.div`
  margin: 0 auto;
  padding: 1%;
`

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  color: white;
  @media only screen and (max-width: 800px) {
    font-size: 1rem;
  }
`

const RandomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const RandomImgBox = styled.div`
  margin: 20px auto;
  padding: 20px;
  border: 1px solid pink;
  border-radius: 15px;
`
const Img = styled.img`
  width: 600px;
  border-radius: 10px;

  /* height: 300px; */
  cursor: pointer;
`


