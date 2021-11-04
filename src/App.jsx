
import axios from "axios";
import { useEffect, useState } from "react";
import CreateModal from "./Components/CreateModal";
import ProductsList from "./Components/ProductsList";
import ProductNav from "./Components/ProductNav";
import Modal from "./Components/Modal";
import productSort from "./Components/productSort";

function App() {
    const [products, setProducts] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now())
    const [showModal, setShowModal] = useState(false)
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [modalProduct, setModalProduct] = useState({
      product: '',
      quantity: '',
      price: '',
      in_stock: '',
      last_order: ''
    })

    useEffect(() => {
        axios.get('http://localhost:3001/juvelyrika')
            .then(res => {
                setProducts(res.data);
                console.log(res.data);
            })
    }, [lastUpdate])

    const create = product => {
      setShowCreateModal(false);
        axios.post('http://localhost:3001/juvelyrika', product)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
            })
    }

    const edit = (product, id) => {
        setShowModal(false);
        axios.put('http://localhost:3001/juvelyrika/'+id, product)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
            })
    }

    const remove = (id) => {
        setShowModal(false);
        axios.delete('http://localhost:3001/juvelyrika/'+id)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
            })
    }

    const modal = (product) => {
        setShowModal(true);
        setModalProduct(product);
    }

    const hide = () => {
        setShowModal(false);
    }

    const hideCreateModal = () => {
      setShowCreateModal(false);
  }

    const createModal = () => {
      setShowCreateModal(true)
  }
    const [types, setTypes] = useState([])
    const [filterBy, setFilterBy] = useState('')
    const [searchBy, setSearchBy] = useState('')
    const [sortBy, setSortBy] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/juvelyrika-product')
            .then(res => {
                setTypes(res.data);
            })
    }, [lastUpdate])

    
    useEffect(() => {
        if (sortBy) {
            setProducts(productSort(products, sortBy));
        }
    }, [sortBy])


    useEffect(() => {
        if (filterBy) {
        axios.get('http://localhost:3001/juvelyrika-filter/'+filterBy)
            .then(res => {
                setProducts(res.data);
            })
        }
    }, [filterBy])


    useEffect(() => {
        if (searchBy) {
        axios.get('http://localhost:3001/juvelyrika-product/?s='+searchBy)
            .then(res => {
                setProducts(res.data);
            })
        }
    }, [searchBy])


    useEffect(() => {
    if (sortBy) {
        setProducts(productSort(products, sortBy));
    }
}, [sortBy])

const reset = () => {
    setLastUpdate(Date.now());
}

    return (
        <div className="product">
            <ProductNav types={types} search={setSearchBy} filter={setFilterBy} sort={setSortBy} reset={reset}></ProductNav>
            <ProductsList products={products} modal={modal} remove={remove}></ProductsList>
            <Modal edit={edit} hide={hide} product={modalProduct} showModal={showModal}></Modal>
            <CreateModal create={create} hide={hideCreateModal} showModal={showCreateModal}></CreateModal>
            <div className="buttonsBlock">
              <button onClick={createModal}>Add</button>
            </div>
        </div>
    )
}

export default App;