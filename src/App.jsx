
import axios from "axios";
import { useEffect, useState } from "react";
import Create from "./Components/Create";
import ProductsList from "./Components/ProductsList";
import Modal from "./Components/Modal";

function App() {


    const [products, setProducts] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now())
    const [showModal, setShowModal] = useState(false)
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

    return (
        <div className="product">
            <Create create={create}></Create>
            <ProductsList products={products} modal={modal}></ProductsList>
            <Modal edit={edit} remove={remove} hide={hide} product={modalProduct} showModal={showModal}></Modal>
        </div>
    )
}

export default App;