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

    menuColor = path => location.pathname === path ? 'white' : '#5bb3f7'

    return (
        <>
            <Menu>
                <Logo src={logo} alt="logo" />
                    <Items displayStatus={hamContent} >
                        <Item to='/' >HOME</Item>
                        <Item to='/shop' >SHOP</Item>
                        <Item to='/gallery' >GALLERY</Item>
                        <Item to='/booking' >BOOKING</Item>
                        <Item to='/about' >ABOUT</Item>
                    </Items>
                <Ham onClick={hamOnClick}>{hamContent}</Ham>
            </Menu>
        </>
    )
}



// const Container = styled.header`
// `

const Menu = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    /* background-color: black; */
    /* position: fixed; */
    /* width: 100%; */
    /* z-index: 2; */
    /* background: linear-gradient(0deg, rgba(0,0,0,0.3071603641456583) 0%, rgba(0,0,0,1) 100%); */
`

const Logo = styled.img`
    height: 40px;
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