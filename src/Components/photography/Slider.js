import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import img1 from '../../../assets/img/react-upload/kaeli-upload/1.jpg';
import img2 from '../../../assets/img/react-upload/kaeli-upload/2.jpg';
import img3 from '../../../assets/img/react-upload/kaeli-upload/3.jpg';
import img4 from '../../../assets/img/react-upload/karn-upload/1.jpg';
import img5 from '../../../assets/img/react-upload/karn-upload/2.jpg';
import img6 from '../../../assets/img/react-upload/karn-upload/3.jpg';
import img7 from '../../../assets/img/react-upload/payam-upload/Medium-10-.jpg';
import img8 from '../../../assets/img/react-upload/rowan-upload/original-1.jpg';
// import img9 from '../../../assets/img/react-upload/payam-upload/Medium-10-.jpg';
import Rellax from "rellax";


// the svg icon works fine but my costome svg images not working- i used png
// performance issue... no strategy for file efficiency 



export default function Slider() {

    useEffect(() => {
        new Rellax(".img1", { // <---- Via class name
          speed: 0,
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        });

        new Rellax(".img2", { // <---- Via class name
            speed: .5,
            center: false,
            wrapper: null,
            round: true,
            vertical: false,
            horizontal: true,
            // percentage: 80
        });

        new Rellax(".img3", { // <---- Via class name
            speed: .8,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        new Rellax(".img4", { // <---- Via class name
            speed: 1.1,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
        new Rellax(".img5", { // <---- Via class name
            speed: 1.5,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
        new Rellax(".img6", { // <---- Via class name
            speed: 2.2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
        new Rellax(".img7", { // <---- Via class name
            speed: 2.5,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, []);
                    // I want to text to be larger on scroll and be adjusted to left and right
                    // line horizental if it works
    return (
        <Container>
            <Div>
                
                <Img src={img3} className="img1" alt="layer" />
                    <H1 className="img3">1, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                
                <Img src={img7} className="img3" alt="layer" />
                    <H1 className="img7">2, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                    <H1 className="img3">2/5, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                
                <Img src={img2} className="img2" alt="layer" /> 
                    <H1 className="img5">3, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                    <H1 className="img3">3, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>

                <Img src={img4} className="img3" alt="layer" />
                    <H1 className="img5">4, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                    <H1 className="img4">4, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                
                <Img src={img5} className="img4" alt="layer" />
                    <H1 className="img6">5, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                    <H1 className="img5">5, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                
                <Img src={img8} className="img5" alt="layer" />
                    <H1 className="img7">6, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                    <H1 className="img5">7, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
              
                <Img src={img6} className="img5" alt="layer" />
                    <H1 className="img6">8, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                    <H1 className="img5">8, THE PHOTOGRAPHER IS ONLY A WITNESS. <br></br>Thomas Merton</H1>
                {/* //okeye// */}
              
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
    /* padding: 1%; */
    /* border-top: 5px solid pink; */
    /* border-bottom: 5px solid pink; */
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
    color: purple;
    margin: 10%;
    /* padding-bottom: 2%; */
    /* border-bottom: 2px solid gray; */
    /* width: 250px; */
    /* display: flex; */
`

const Span = styled.span`
    display: flex;
    font-size: .8rem;
`
