import { useState, useContext } from 'react';
import styled from 'styled-components';
// import SHOP_DATA from '../../../assets/json/shop-data.json'
import { CategoriesContext } from '../context/CategoriesContext';
import CategoryPreview from './CategoryPreview';




export default function CategoriesPreview(){
    const { categoriesMap } = useContext(CategoriesContext);
   
    return (
    <Div>

        <Container>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];   
                return <CategoryPreview key={title} title={title} products={products} />
            })}
            
        </Container>
    </Div>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: row; */
    /* grid-template-columns: repeat(4, 1fr); */
    /* row-gap: 50px; */
    /* background-color: white; */
    padding: 1rem; // needs to change later
`
const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`