function Product ({product, modal, remove}) {

    const showEditModal = () => {
        modal(product)
    }

    const removeProduct = () => {
        remove(product.id)
    }

    return (
        <tr>
            <td>{product.product}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.price * product.quantity}</td>
            <td>{parseInt(product.in_stock) ? 'Yes' : 'No'}</td>
            <td>{new Date(product.last_order).toISOString().split('T')[0]}</td>
            <td>
                <button onClick={showEditModal} className="editButton">Edit</button>&nbsp;
                <button onClick={removeProduct} className="deleteButton">Delete</button>
            </td>
        </tr>
    )
}

export default Product;