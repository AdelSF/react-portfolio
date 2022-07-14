import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export default function ProductCard({ product }) {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    

    return (
        <div>
            <img src={imageUrl} alt={`${name}`} />
            <div>
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <button onClick={addProductToCart}>Add to Cart</button>
        </div>
    )
}