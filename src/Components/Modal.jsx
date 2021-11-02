import { useEffect, useState } from "react";

function Modal({showModal, hide, product, edit, remove}) {
    const [inputs, setInputs] = useState({
        product: '',
        quantity: '',
        price: '',
        in_stock: '',
        last_order: ''
    })

    useEffect(() => {
        setInputs({
            product: product.product,
            quantity: product.quantity,
            price: product.price,
            in_stock: product.in_stock,
            last_order: product.last_order.slice(0,10)
        })
    },[product])

    const handleEdit = () => {
        edit({
            product: inputs.product,
            quantity: inputs.quantity,
            price: inputs.price,
            in_stock: inputs.in_stock,
            last_order: inputs.last_order
        }, product.id)
    }

    const formControl = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }



    return (
        <div className="product__modal" style={{
            display: showModal ? 'flex' : 'none',
            top: window.scrollY + 100 + 'px'
            }}>
            <div className="product__form">
            <h2>Edit product</h2>
            <div className="product__form__input">
                <span>Product</span><input type="text" value={inputs.product} onChange={(e) => formControl(e, 'product')} />
            </div>
            <div className="product__form__input">
            <span>Quantity</span><input type="text" value={inputs.quantity} onChange={(e) => formControl(e, 'quantity')} />
            </div>
            <div className="product__form__input">
            <span>Price</span><input type="text" value={inputs.price} onChange={(e) => formControl(e, 'price')} />
            </div>
            <div className="product__form__input">
            <span>In stock</span><input type="text" value={inputs.in_stock} onChange={(e) => formControl(e, 'in_stock')} />
            </div>
            <div className="product__form__input">
            <span>Last order</span><input type="date" value={inputs.last_order} onChange={(e) => formControl(e, 'last_order')} />
            </div>
            <div className="product__form__input__buttons">
            <button onClick={handleEdit}>Save</button>
            <button onClick={hide}>Cancel</button>
            <button onClick={() => remove(product.id)}>Delete</button>
            </div>
        </div>
        </div>
    )
}

export default Modal;