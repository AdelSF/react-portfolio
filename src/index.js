import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppWrapper from './Routes.jsx';
import store from './Redux/store';
import UserProvider from "./Components/context/UserContext.js";
import { CategoriesProvider } from "./Components/context/CategoriesContext.js";
import { CartProvider } from "./Components/context/CartContext";


const rootContainer = document.getElementById("root")
ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <UserProvider>
                    <CategoriesProvider>
                        <CartProvider>
                            <AppWrapper />
                        </CartProvider>
                    </CategoriesProvider>
                </UserProvider>
            </Provider>
        </React.StrictMode>,
    rootContainer
)