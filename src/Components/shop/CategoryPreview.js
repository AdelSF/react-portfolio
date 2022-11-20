import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import styled from 'styled-components';



const CategoryPreview = ({ title, products }) => {
    return (
        <Div>
            <H2>
                <Link to={title}><Span>{title.toUpperCase()}</Span></Link>
            </H2>
            <Div2>
                {products.filter((_, idx) => idx < 1)
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Div2>
        </Div>
    )
}

export default CategoryPreview;


const Div = styled.div`
    border: 2px solid gray;
    margin: 1rem;
`
const Div2 = styled.div`
    /* display: flex; */
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
`
const H2 = styled.h2`
    display: flex;
    justify-content: center;
`

const Span = styled.span`
    color: white;
    /* text-decoration: none; */
`