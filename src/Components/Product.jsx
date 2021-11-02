function Product ({product, modal}) {

    const  showEdit = () => {
        modal(product)
    }

    return (
        <div className="product">
            <div className="product__name">{product.product}</div>
            <div className="product__quantity">{product.quantity}</div>
            <div className="product__price">{product.price}</div>
            <div className="product__in_stock">{product.in_stock}</div>
            <div className="product__last_order">{new Date(product.last_order).getFullYear()}</div>
            <button onClick={showEdit}>Edit</button>
        </div>
    )
}

export default Product;