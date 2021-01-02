import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import hamMenu from '../../../assets/icons/hamMenu.png';
// import times from '../../../assets/icons/times.png';


export default function Header() {
    const [ hamMenu, setHamMenu ] = useState("ham-icon")


    const handleClick = () => {
        if (hamMenu === "ham-icon") {
            setHamMenu("times-icon")
        } else {
            setHamMenu("ham-icon")
        }
    }

    // first az mobile be desktop
    // mobile - tablet - desktop

    return (
        <Container>
            <Logo src="../../assets/transparent-white-logo.png" alt="logo"></Logo>
            
            <HamMenu onClick={handleClick}>
                    <Link href='/'><Image src={`assets/icons/${hamMenu}.png`}/></Link>
            </HamMenu>
            <Items menu={ hamMenu }>
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
`

const Items = styled.ul`
    width: 200%; // there should be a better way to do this// needed refactoring
    padding: 20px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-direction: row-reverse;
    @media only screen and (max-width: 600px) {
        z-index: 1;
        display: ${({menu}) => menu === 'ham-icon' ? 'none' : 'flex'};
        flex-direction: ${({menu}) => menu === 'ham-icon' ? '' : 'column-reverse'};
        position: absolute;
        /* background-color: lightgray; */
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        align-items: start;
        padding-top: 150px;
    }
`

const Item = styled.li`
    padding: 18px 0px;
    list-style-type: none;
    font-size: .8rem;
    text-transform: uppercase;
    font-weight: 800;
    cursor: pointer;
    :last-child {
     margin-left: 0;
     }
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    `

const Image = styled.img`
    padding: 10px 20px;
    height: 40px;
    cursor: pointer;
`
const HamMenu = styled.div`
    display: none;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        display: block;
        z-index: 2;
    }
`

const Logo = styled.img`
    padding: 20px 40px;
    height: 55px;
    width: 110px;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        padding: 10px 20px;
        height: 35px;
        width: 70px;
    }
`

