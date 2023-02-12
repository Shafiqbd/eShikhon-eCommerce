import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
    const {name, img, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className=''>Price: ${price}</p>
                <p className=''><small>Seller: {seller}</small></p>
                <p className=''><small>Rating: {ratings}</small></p>
               
            </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            
        </div>
    );
};

export default Product;