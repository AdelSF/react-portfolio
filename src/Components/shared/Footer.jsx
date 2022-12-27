import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"


var menuColor;
export default function Header() {
    let location = useLocation();
  
    menuColor = path => location.pathname === path ? 'white' : '#5bb3f7'

    return (
        <>
            <Menu>
                    <Items >
                        <Item to='/' >HOME</Item>
                        {/* <Item to='/shop' >SHOP</Item> */}
                        <Item to='/galleries' >GALLERY</Item>
                        <Item to='/booking' >BOOKING</Item>
                        <Item to='/about' >ABOUT</Item>
                    </Items>
            </Menu>
            <P>All right resereved 2023</P>
        </>
    )
}


const Menu = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: black;
    /* height: 100px; */
`

const Items = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 500px;
    height: 100px;
    @media (max-width: 500px) {
        display: none;
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

const P = styled.p`
    display: flex;
    justify-content: center;
    color: gray;
`