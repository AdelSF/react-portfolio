import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import First from '../../../assets/img/png-upload/1.png';
// import Second from '../../../assets/img/png-upload/2.png';
// import Third from '../../../assets/img/png-upload/3.png';
// import Fourth from '../../../assets/img/png-upload/4.png';
import img1 from '../../../assets/img/react-upload/kaeli-upload/1.jpg';
import img2 from '../../../assets/img/react-upload/kaeli-upload/2.jpg';
import img3 from '../../../assets/img/react-upload/kaeli-upload/3.jpg';
import img4 from '../../../assets/img/react-upload/karn-upload/1.jpg';
import img5 from '../../../assets/img/react-upload/karn-upload/2.jpg';
import img6 from '../../../assets/img/react-upload/karn-upload/3.jpg';
import Rellax from "rellax";


// the svg icon works fine but my costome svg images not working- i used png



export default function Slider() {

    useEffect(() => {
        new Rellax(".img1", { // <---- Via class name
          speed: -.2,
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        });

        new Rellax(".img2", { // <---- Via class name
            speed: 1,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        new Rellax(".img3", { // <---- Via class name
            speed: .2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        new Rellax(".img4", { // <---- Via class name
            speed: -.4,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, []);

    return (
        <Container>
            <Div>
                <Img src={img3} className="img1" alt="layer" />
                    <H1 className="img4">THE EARTH IS ART, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                
                <Img src={img2} className="img2" alt="layer" />
                    <H1 className="img2">THE EARTH IS ART, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
              
                <Img src={img1} className="img3" alt="layer" />
                <Div3>
                    <H1 className="">THE EARTH IS ART, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                </Div3>
                <Img src={img4} className="img3" alt="layer" />

                <Div3>
                    <H1 className="">THE EARTH IS ART, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                </Div3>
                <Img src={img5} className="img1" alt="layer" />

                {/* <Div3>
                    <H1 className="fourth">THE EARTH IS ART, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                </Div3>
                <Img src={img6} className="img3" alt="layer" /> */}
            </Div>
          
            <Div>
              {/* <Img src={First} className="first" alt="layer" /> */}
            </Div>
        </Container>
    )
}

const Container = styled.div`
    margin: 0;
    z-index: 5;
`


const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`



const Img = styled.img`
    display: flex;
    width: 100%;
    border-top: 2px solid black;
`

const Div2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: flex-end;
    position: absolute;
    margin: 10%;
`

const Div3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: row;
    width: 80%;
    justify-content: flex-end;
    position: absolute; */
    margin: 10%;
`

const H1 = styled.h1`
    font-size: 1.3rem;
    color: black;
    margin: 10%;
    /* width: 250px; */
    /* display: flex; */
`

const Span = styled.span`
    display: flex;
    font-size: .8rem;
`
