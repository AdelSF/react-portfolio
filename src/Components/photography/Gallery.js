import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import img1 from '../../../assets/img/react-upload/kaeli-upload/1.jpg';
import img2 from '../../../assets/img/react-upload/kaeli-upload/2.jpg';
import img3 from '../../../assets/img/react-upload/kaeli-upload/3.jpg';
import img4 from '../../../assets/img/react-upload/karn-upload/1.jpg';
import img5 from '../../../assets/img/react-upload/karn-upload/2.jpg';
import img6 from '../../../assets/img/react-upload/karn-upload/3.jpg';
import img7 from '../../../assets/img/react-upload/payam-upload/Medium-10-.jpg';
import img8 from '../../../assets/img/react-upload/rowan-upload/Original-1.jpg';


export default function Gallery() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <Container>
             <div >
                <Img src={ img1 } />
                <Img src={ img2 } />
                <Img src={ img3 } />
                <Img src={ img4 } />
            </div>
        

            <BoxLeft style={{transform: `translateY(${offsetY * 0.2}px)`}}>
                <Img src={ img1 } />
                <Img src={ img2 } />
                <Img src={ img3 } />
                <Img src={ img4 } />
            </BoxLeft>
            <BoxRight style={{transform: `translateY(${offsetY * 0.5}px)`}}>
                <Img src={ img5 } />
                <Img src={ img6 } />
                <Img src={ img7 } />
                <Img src={ img8 } />
            </BoxRight>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Img = styled.img`
    display: flex;
    width: 450px;
    margin: 30px;
`

const BoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: space-between;
    /* transform: ; */
    /* flex-wrap: wrap; */
`

const BoxRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: space-between;
    /* flex-wrap: wrap; */
`

