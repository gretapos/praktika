import Product from "./Product";

function ProductsList({products, modal}) {

    return (
        <div className="product__list">
            {products.map(product => <Product key={product.id} product={product} modal={modal}></Product>)}
        </div>
    )
}

export default ProductsList;