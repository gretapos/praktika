import { useState } from "react";


function ProductNav({ types, filter, reset, search, sort }) {

    const [filterValue, setFilterValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value)
    }

    const selectSort = e => {
        setSortValue(e.target.value);
        sort(e.target.value)
    }

    const handleSearchValue = e => {
        setSearchValue(e.target.value);
        search(e.target.value)
    }

    const resetHandler = () => {
        reset();
        setFilterValue('');
        setSearchValue('');
        setSortValue('');
        sort('');
    }

    return (
        <div className="product__nav">
            <div className="product__nav__filter">
                <span>Jewelery Sort</span>
                <select onChange={selectSort} value={sortValue}>
                    <option value="">Select jewelery</option>
                    <option value="name_asc">By product - AZ</option>
                    <option value="name_desc">By product - ZA</option>
                    <option value="price_asc">By price - 19</option>
                    <option value="price_desc">By price - 91</option>
                </select>
            </div>
            <div className="product__nav__filter">
                <span>Jewelwry Filter by type</span>
                <select onChange={selectFilter} value={filterValue}>
                    <option value="">Select jewelery</option>
                    {
                        types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)
                    }
                </select>
            </div>
            <div className="product__nav__filter">
                <span>Jewelery Search by product</span>
                <input onChange={handleSearchValue} value={searchValue}></input>
            </div>
            <div className="product__nav__reset">
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
}

export default ProductNav;