import styled from 'styled-components';
import CartItem from './CartItem';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CheckoutItem from './CheckoutItem';

export default function Checkout() {
    const { cartItems, cartTotal } = useContext(CartContext);


    return (
        <Container>
            <h1>ckeckout page</h1>
            <Div>
                {cartItems.map((cartItem) => 
                        <CheckoutItem key={cartItem.id} 
                            cartItem={cartItem} 
                        />
                    )
                }
            </Div>
            <span>Total: ${cartTotal}</span>
        </Container>
    )
}

const Container = styled.div`
   background: white;
`

const Div = styled.div`
   
`

const Span = styled.span`
    margin: 1rem;
    font-size: 1.5rem;
`

// .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }