import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allproducts')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <ProductForm />
            <hr />
            <h2>All Products:</h2>
            
            {loaded && <ProductList products={products} />}
            
        </div>
    )
}

export default Main;