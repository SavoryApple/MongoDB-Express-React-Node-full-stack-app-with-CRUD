import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                    <DeleteButton productId={product._id} successCallback={() => history.push("/products")} />
                </>
            )}
        </div>
    )
}

export default Update;