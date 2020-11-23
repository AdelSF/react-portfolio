import React from "react"
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './Routes.jsx'
import store from './Redux/store'



const rootContainer = document.getElementById("root")
ReactDOM.render(
        <Provider store={store}>
            <Routes />
        </Provider>,
    rootContainer
)