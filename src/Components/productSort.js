function productSort(state, by) {
    const products = state.slice();
    switch (by) {
        case 'product_asc':
            products.sort((a, b) => {
                const productA = a.product.toUpperCase();
                const productB = b.product.toUpperCase();
                if (productA < productB) {
                    return -1;
                }
                if (productA > productB) {
                    return 1;
                }
                return 0;
            });
            break;
        case 'product_desc':
            products.sort((a, b) => {
                const productA = a.product.toUpperCase();
                const productB = b.product.toUpperCase();
                if (productA < productB) {
                    return 1;
                }
                if (productA > productB) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'price_asc':
            products.sort(function(a, b) {
                return a.price - b.price;
            });
            break;
        case 'price_desc':
            products.sort(function(a, b) {
                return b.price - a.price;
            });
            break;
        default:
    }
    return products
}
export default productSort;