
import axios from "axios";
import { useEffect, useState } from "react";
import CreateModal from "./Components/CreateModal";
import ProductsList from "./Components/ProductsList";
import Modal from "./Components/Modal";

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
        axios.get('http://localhost:3003/juvelyrika')
            .then(res => {
                setProducts(res.data);
                console.log(res.data);
            })
    }, [lastUpdate])

    const create = product => {
      setShowCreateModal(false);
        axios.post('http://localhost:3003/juvelyrika', product)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
            })
    }

    const edit = (product, id) => {
        setShowModal(false);
        axios.put('http://localhost:3003/juvelyrika/'+id, product)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
            })
    }

    const remove = (id) => {
        setShowModal(false);
        axios.delete('http://localhost:3003/juvelyrika/'+id)
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

    return (
        <div className="product">
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