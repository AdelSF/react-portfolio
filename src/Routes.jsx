import React from "react"
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/home'
import Shop from './Components/art/Shop'
import Gallery from './Components/gallery/Gallery'
import Booking from './Components/booking/Booking'
import About from './Components/about/About'
import Header from './Components/shared/Header.jsx'




const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, sans-serif;
  }
  
  body, h1, ul {
    margin: 0;
    padding: 0;
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
              <Route path="/gallery"><Gallery /></Route>
              <Route path="/booking"><Booking /></Route>
              <Route path="/about"><About/></Route>
              <Route path="/"><Home /></Route>
            </Switch>
        </BrowserRouter>
    </>
  )
}

export default Routes