function ProductsStats({stats, groupStats}) {


    return (
        <div className="products__stats">
            <div className="products__stats__stat">
                <span><i>Products Count:</i> <b>{stats.count}</b></span>
                <span><i>Products Price:</i> <b>{stats.price.toFixed(2)} eur</b></span>
                <span><i>Products Average Price:</i> <b>{stats.average.toPrecision(5)} eur</b></span>
            </div>
            <div className="products__stats__gstat">
                {
                    groupStats.map(s => <span key={s.type}><i>{s.type}</i> <b>{s.count}</b></span>)
                }
            </div>
        </div>
    )
}

export default ProductsStats;