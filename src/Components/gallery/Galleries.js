import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Galleria from './Galleria';


export default function Galleries(){


    return (
        <Div>  
            <Galleria />
        </Div>
    );
}

const Div = styled.div`
  text-align: center;
`
