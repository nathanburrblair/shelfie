import React, {Component} from 'react';

const Product = props => {
    const {product} = props;

        return (
            <div>
                <p>Product</p>
               {product.name}
               {product.price}
               {product.image}
            </div>
        )
    }


export default Product