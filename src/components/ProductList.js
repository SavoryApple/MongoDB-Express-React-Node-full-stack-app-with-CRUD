import React from 'react'
import axios from 'axios';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

const ProductList = (props) => {
    console.log("PRODUCTS.productList:", props.products.productList)
    return (
        
            <div>
                {props.products.productList.map((product, i) =>
                    <Link to={`/products/` + product._id}><p key={i}>_ID: {product._id}, Title: {product.title}, Price: {product.price}, Description: {product.description}</p></Link>
                )}
            </div>
        
    )
}

export default ProductList;