


export default function ProductCard({ product }) {
    const { name, price, imageUrl } = product;

    return (
        <div>
            <img src={imageUrl} alt={`${name}`} />
            <div>
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}