import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../context/CategoriesContext";
import ProductCard from "./ProductCard";


export default function Category() {
    const { category } = useParams();
    console.log("catrgory", category)
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])


    return (
        <div>
            { products &&
                products.map((product) => (
                     <ProductCard key={product.id} product={product} />
                    )
            )}
        </div>
    )
}

