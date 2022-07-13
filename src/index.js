import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes.jsx';
import store from './Redux/store';
import UserProvider from "./Components/context/UserContext.js";
import { ProductsProvider } from "./Components/context/productContext.js";
import { CartProvider } from "./Components/context/CartContext";


const rootContainer = document.getElementById("root")
ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <UserProvider>
                    <ProductsProvider>
                        <CartProvider>
                            <Routes />
                        </CartProvider>
                    </ProductsProvider>
                </UserProvider>
            </Provider>
        </React.StrictMode>,
    rootContainer
)