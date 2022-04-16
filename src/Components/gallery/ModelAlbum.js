import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LinkJson from '../../../assets/json/imgLinks.json';



export default function ModelAlbum({modelId, data}){

    const [newUrl, setNewUrl] = useState([])

   return(
       <>
        {data[modelId].moreImgs.map((img, idx) => {
        console.log("immmeg", img, idx)
            return(
                <>
                    <Img src={img}></Img>
                </>
                )
        })}
        </>
   )
               
}

const H1 = styled.h1`
    color: white;
`
const Img = styled.img`
  width: 300px;
  border-radius: 10px;

  /* height: 300px; */
  /* cursor: pointer; */
`

