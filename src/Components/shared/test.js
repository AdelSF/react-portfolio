import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export default function Menu() {
    const [ hamMenu, setHamMenu ] = useState("ham")
    
    const handleClick = () => {
        if (hamMenu === "ham") {
            setHamMenu("times")
        } else {
            setHamMenu("ham")
        }
    }

    return (
        <>
            <Header>
                <HamMenu onClick={handleClick}>
                    <Link href='/'><Image src={`./${hamMenu}.png`} /></Link>
                </HamMenu>
                <Items menu={ hamMenu }>
                    <Link href='/'><Item>Home</Item></Link>
                    <Link href='/collections'><Item>Collection</Item></Link>
                    <Item>Contact Us</Item>
                    <Item>About Me</Item>
                </Items>
                <Link href='/'><Logo src="/logo.png" /></Link>
            </Header>
        </>
    )
}

const Line = styled.div`
    width: 100%;
    height: 0.5px;
    background-color: ${color.secondary};
`

const HamMenu = styled.div`
    display: none;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        display: block;
        z-index: 2;
    }
`

const Image = styled.img`
    width: 80px;
    cursor: pointer;
`

const Header = styled.header`
    padding: 70px 200px 70px 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 992px) {
        flex-direction: column-reverse;
        padding: 70px;
    }
    @media only screen and (max-width: 600px) {
        padding: 0;
        flex-direction: row;
    }
`

const Logo = styled.img`
    width: 80px;
    z-index: 30000000;
    cursor: pointer;
`

const Items = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    height: 32px;
    align-items: center;
    li:last-child {
        border: 0px;
    }
    @media only screen and (max-width: 600px) {
        z-index: 1;
        display: ${({menu}) => menu === 'ham' ? 'none' : 'flex'};
        flex-direction: ${({menu}) => menu === 'ham' ? '' : 'column'};
        position: absolute;
        background-color: #d2f6d4e8;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        align-items: start;
        padding-top: 80px;
        li:last-child {
            border-top: 1px solid ${color.secondary};
            border-bottom: 1px solid ${color.secondary};
        }
    }
`

const Item = styled.li`
    padding: 10px;
    border-right: 1px solid ${color.primary};
    color: ${color.secondary};
    font-size: 22px;
    font-weight: 400;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        border-right: none;
        border-top: 1px solid ${color.secondary};
        width: 100%;
        padding-left: 20px;
    }
    `