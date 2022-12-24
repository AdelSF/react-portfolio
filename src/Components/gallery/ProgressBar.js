import React, { useEffect } from 'react';
import useStorage from '../../utils/firebase/useStorage';
// import { motion } from 'framer-motion';
import styled from 'styled-components';

export default function ProgressBar ({ file, setFile }){
  const { progress, url } = useStorage(file);
  
  
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <Div>
        <div 
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        >file</div>
    </Div>
  );
} 


const Div = styled.div`
    height: 5px;
    background: pink;
    margin: 3rem;
`