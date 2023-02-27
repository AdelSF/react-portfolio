import React from "react"
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Home from './Components/home/Home'
import Shop from './Components/shop/Shop'
import Galleries from './Components/gallery/Galleries'
import Booking from './Components/booking/Booking'
import About from './Components/about/About'
import AuthPage from './Components/auth/AuthPage'
import Checkout from "./Components/shop/Checkout"
// import Model from './Components/gallery/model'
import Header from './Components/shared/Header.jsx'
import Footer from './Components/shared/Footer.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"


const client = new ApolloClient({
  uri: 'http://localhost:1337/api/members',
  cache: new InMemoryCache()
})


const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`

const AllRoutes = () => { 
  const routes = useRoutes([
    { path:"/galleries", element:<Galleries /> },
    { path:"/booking", element:<Booking /> },
    { path:"/shop/*", element:<Shop /> },
    { path:"/about", element:<About /> },
    { path:"/checkout", element:<Checkout /> },
    { path:"/auth", element:<AuthPage />},
    { path:"/", element:<Home />}
  ])
  return routes

}

const AppWrapper = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Header />
        <AllRoutes />
        {/* <Footer /> */}
      </ApolloProvider>
    </Router>
  )
}

export default AppWrapper