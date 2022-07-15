import styled from 'styled-components';
import CartItem from './CartItem';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


export default function CartDropDown() {
    const { isCartOpen, setIsCartOpen} = useContext(CartContext);
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()
    
    function goToCheckoutHandler() {
        navigate('/checkout')
        setIsCartOpen(!isCartOpen);
    }
    return (
        <Container>
            <Div>
                {cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)}
            </Div>
            <button onClick={goToCheckoutHandler}>Go To Checkout</button>

        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`

const Div = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

// .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }