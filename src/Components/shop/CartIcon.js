import CartSvg from '../../../assets/icons/shopping-bag.svg';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';


export default function CartIcon() {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <Div onClick={toggleIsCartOpen}>
            <img src={CartSvg} />
            <span>0</span>
        </Div>
    )
}

const Div = styled.div`
    background: white;
    width: 15px;
    height: 35px;
    margin: 5px;
    position: relative;
    cursor: pointer;
`
