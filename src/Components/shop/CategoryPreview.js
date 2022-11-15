import ProductCard from "./ProductCard";



const CategoryPreview = ({ title, products }) => {
    return (
        <div>
            <h2>
                <span>{title.toUpperCase()}</span>
            </h2>
            <div>
                {products.filter((_, idx) => idx < 4)
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default CategoryPreview;