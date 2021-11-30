import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem :{name, imageUrl, quantity, price }}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='product'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='name'>{price}</span>
        <div className='remove'>&#10005;</div>
    </div>
);

export default CheckoutItem;