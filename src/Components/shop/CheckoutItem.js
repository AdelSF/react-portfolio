import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


export default function CheckoutItem({ cartItem }) {
    const {name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <Div>
            <Item>
                <img src={imageUrl} alt={`${name}`} />
                <br />
                <span>Name: {name}</span>
                <br />
                <button onClick={removeItemHandler}>-</button>
                <span>Qty: {quantity}</span>
                <button onClick={addItemHandler}>+</button>
                <br />
                <span>Price: {price}</span>
                <br />
                <button onClick={clearItemHandler}>Remove</button>
                <br />
            </Item>
        </Div>
    )
}

const Div = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`

const Item = styled.div`
    width: 300px;
`