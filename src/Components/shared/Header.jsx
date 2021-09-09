import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../../../assets/img/Other/transparent-white-logo.png"
import { useLocation } from "react-router-dom"


var menuColor;
export default function Header() {
    let location = useLocation();
    const [hamContent, setHamContent] = useState('☰')

    function hamOnClick() {
        if (hamContent === '☰') {
            setHamContent('╳')
        } else {
            setHamContent('☰')
        }
    }

    useEffect(() => {
        // document.title = ""
    })

    menuColor = path => location.pathname === path ? 'white' : '#5bb3f7'

    return (
        <Container>
            <Menu>
                <Logo src={logo} alt="logo" />
                    <Items displayStatus={hamContent} >
                        <Item to='/' >HOME</Item>
                        <Item to='/art' >ART</Item>
                        <Item to='/photography' >PHOTOGRAPHY</Item>
                        <Item to='/booking' >BOOKING</Item>
                        <Item to='/about' >ABOUT</Item>
                    </Items>
                <Ham onClick={hamOnClick}>{hamContent}</Ham>
            </Menu>
        </Container>
    )
}



const Container = styled.header`
    /* background-color: #b1b36d; */
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 50px;
    /* display: block; */
`
const Menu = styled.header`
    display: flex;
    justify-content: space-between;
`

const Logo = styled.img`
    height: 55px;
    margin-left: 1.5rem;
`

const Items = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    margin-right: 1.5rem;
    @media (max-width: 600px) {
        display: ${({displayStatus}) => displayStatus === '╳' ? 'flex' : 'none' };
        flex-direction: column;
        height: 40vh;
        margin-top: 10vh;
        width: unset;
    }
`

const Item = styled(Link)`
    text-decoration: none;
    color: ${({to}) => menuColor(to)};
    font-weight: 600;
    &:hover {
        text-shadow: 0px 0px 5px black;
        color: lightgray;
        transition: .7s;
    }
`

const Ham = styled.span`
    color: white;
    font-size: 2rem;
    margin: 10px 20px;
    @media (min-width: 600px) {
        display: none;
    }
`