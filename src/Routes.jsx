import React from "react"
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/home/Home'
import Shop from './Components/shop/Shop'
import Galleries from './Components/gallery/Galleries'
import Booking from './Components/booking/Booking'
import About from './Components/about/About'
import Header from './Components/shared/Header.jsx'
import Footer from './Components/shared/Footer.jsx'




const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, sans-serif;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: black;
  }
`


const Routes = () => {
  return (
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/shop"><Shop /></Route>
              <Route path="/gallery"><Galleries /></Route>
              <Route path="/booking"><Booking /></Route>
              <Route path="/about"><About/></Route>
              <Route path="/"><Home /></Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default Routes