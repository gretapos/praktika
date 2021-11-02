import Product from "./Product";

function ProductsList({products, modal, remove}) {

    return (
        <div className="product__list">
            <table className="product__list__table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total value</th>
                        <th>In Stock?</th>
                        <th>Last Order</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => <Product key={product.id} product={product} modal={modal} remove={remove}></Product>)}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsList;