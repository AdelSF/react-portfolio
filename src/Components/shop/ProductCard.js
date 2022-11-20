import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from 'styled-components';

export default function ProductCard({ product }) {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    

    return (
        <Container>
            <ProductImg src={imageUrl} alt={`${name}`} />
            <div>
                <Span>{name}</Span>
                <Span>${price}</Span>
            </div>
            <Button onClick={addProductToCart}>Add to Cart</Button>
        </Container>
    )
}

const Container = styled.div`
    /* width: 200px; */
    margin: 2rem;
    border: 2px solid gray;
    border-radius: 5px;
    background-color: #f8efed; 
    /* width: 20%; */
    /* display: block; */
    /* flex-direction: row;
    margin: 20px; */
    /* justify-content: space-around; */

`

const ProductImg = styled.img`
    /* width: 150px; */
    margin: 10px;
`

const Span = styled.span`
    margin: 1rem;
`

const Button = styled.button`
    width: 100px;
    margin: 1rem;
`