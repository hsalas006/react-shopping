import React from "react";
import { connect } from "react-redux";

import { toggleCardHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg';
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCardHidden, itemsCount }) => (
    <div className='cart-icon' onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemsCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCardHidden : () => dispatch(toggleCardHidden())
});

const mapStateToProps = state => ({
    itemsCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);