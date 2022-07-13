import { useState, useContext } from 'react';
import styled from 'styled-components';
// import SHOP_DATA from '../../../assets/json/shop-data.json'
import { ProductsContext } from '../context/productContext';
import ProductCard from './ProductCard';




export default function Shop(){
    const {products} = useContext(ProductsContext);
    return (
        <Container>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 50px;
    background-color: white;
    padding: 1rem; // needs to change later
`
