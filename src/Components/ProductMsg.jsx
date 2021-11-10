function ProductMsg({msg, showMsg}) {

    return (
        <div className="product__msg" style={{height: showMsg ? '60px' : '0'}}>
            <span>{msg}</span>
        </div>
    )
}

export default ProductMsg