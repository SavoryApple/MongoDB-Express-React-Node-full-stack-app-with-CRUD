import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.productList);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
        //something is happening to products. After its filtered, the format is changing so that on ProductList.js, the map no longer works
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product/create', product)
            .then(res => {
                setProducts([...products, res.data]);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <ProductForm
                onSubmitProp={createProduct}
                initialTitle=""
                initialPrice=""
                initialDescription=""
            />
            <hr />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    );
}

export default Main;