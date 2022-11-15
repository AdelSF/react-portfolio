import { useState, useContext } from 'react';
import styled from 'styled-components';
// import SHOP_DATA from '../../../assets/json/shop-data.json'
import { CategoriesContext } from '../context/CategoriesContext';
import CategoryPreview from './CategoryPreview';
import ProductCard from './ProductCard';




export default function Shop(){
    const { categoriesMap } = useContext(CategoriesContext);
   
    return (
        <Container>
            {Object.keys(categoriesMap).map((title) => {
             const products = categoriesMap[title];   
            return <CategoryPreview key={title} title={title} products={products} />

            })}
            
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
