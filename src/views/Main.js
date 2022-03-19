import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.productList);
                console.log("res.data:", res.data)
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = productId => {
        
        setProducts(products.filter(product => product._id != productId));
        //something is happening to products. After its filtered, the format is changing so that on ProductList.js, the map no longer works
    }

    return (
        <div>
        <ProductForm/>
        <hr/>
        {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    );
}

export default Main;