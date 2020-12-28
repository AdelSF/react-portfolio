import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'



export default function Header() {
    // const [ hamMenu, setHamMenu ] = useState("ham")


    // const handleClick = () => {
    //     if (hamMenu === "ham") {
    //         setHamMenu("times")
    //     } else {
    //         setHamMenu("ham")
    //     }
    // }


    return (
        <Container>
            <Image src="../../assets/transparent-white-logo.png" alt="logo" />
            {/* <HamMenu onClick={handleClick}>
                    <Link href='/'><Image src={`./${hamMenu}.png`} /></Link>
            </HamMenu> */}
            <Items>
                <Item><Link to='/about' style={{textDecoration: 'none', color: 'rgb(91, 179, 247)'}}>About</Link></Item>
                <Item><Link to='/booking' style={{textDecoration: 'none', color: 'rgb(91, 179, 247)'}}>Booking</Link></Item>
                <Item><Link to='/photography' style={{textDecoration: 'none', color: 'rgb(91, 179, 247)'}}>Photography</Link></Item>
                <Item><Link to='/art' style={{textDecoration: 'none', color: 'rgb(91, 179, 247)'}}>Art</Link></Item>
                <Item><Link to='/' style={{textDecoration: 'none', color: 'rgb(91, 179, 247)'}}>Home</Link></Item>
            </Items>
        </Container>
    )
}



const Container = styled.header`
    width: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background-color: #e070d3; */
`

const Items = styled.ul`
    width: 200%; // there should be a better way to do this// needed refactoring
    padding: 20px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-direction: row-reverse;
    /* color: rgb(91, 179, 247) */
`
const Item = styled.li`
    /* padding: 20px 40px; */
    list-style-type: none;
    font-size: .8rem;
    text-transform: uppercase;
    font-weight: 800;
    margin-left: 25px;
    :last-child {
        margin-left: 0;
    }
`

const Image = styled.img`
    padding: 20px 40px;
    height: 55px;
    width: 110px;
    cursor: pointer;
`
// const HamMenu = styled.div`
//     display: none;
//     cursor: pointer;
//     @media only screen and (max-width: 600px) {
//         display: block;
//         z-index: 2;
//     }
// `

