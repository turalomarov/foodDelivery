import React from 'react';
import { useDispatch } from 'react-redux';
import removeFromBasket from '../actions/removeFromBasket';
import addQuantity from '../actions/addQuantity'
import reduceQuantity from '../actions/reduceQuantity'

const ShoppingCartItem = (props) => {
    const dispatch = useDispatch()
    return (
        <li className="bg-light d-flex flex-row justify-content-between shopping-cart-item">
            <div>
                <h6>{props.food.name}</h6>
                <div className="d-flex flex-column">
                    <span className="text-muted">{props.food.category}</span>
                    <a onClick={() => dispatch(removeFromBasket(props.food))} className="remove-button">REMOVE ITEM <i className="fas fa-trash"></i></a>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-between">
                <div className="d-flex flex-row quantity">
                    <span className="badge badge-danger align-self-center" onClick={() => dispatch(reduceQuantity(props.food))}>-</span>
                    <span className="food-count">{props.food.count}</span>
                    <span className="badge badge-success align-self-center" onClick={() => dispatch(addQuantity(props.food))}>+</span>
                </div>
                <span className="align-self-end">{props.food.price.toFixed(2)}</span>
            </div>
        </li>
    );
}

export default ShoppingCartItem;