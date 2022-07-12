import React from "react"
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './Routes.jsx'
import store from './Redux/store'
import UserProvider from "./Components/context/UserContext.js"


const rootContainer = document.getElementById("root")
ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <UserProvider>
                    <Routes />
                </UserProvider>
            </Provider>
        </React.StrictMode>,
    rootContainer
)