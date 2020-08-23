import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import addToBasket from '../actions/addToBasket.js';
import LazyImage from './LazyImage.js';


const MenuItem = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const addToShoppingBasket = () => {

        const basketItem = {
            name: props.dish.name,
            description: props.dish.description,
            price: props.dish.price,
            category: props.dish.category.name,
            count: 1,
        }

        props.dish.count = 1;

        if (!!state.basket) {
            dispatch(addToBasket(basketItem))
            bounce()
        } 
    }

    const bounce = () => {
        const button = document.querySelector('#menu-toggle')
        
        button.className = "btn btn-primary animate__animated animate__wobble"
        setTimeout(function() {
            button.className = "btn btn-primary"
        }, 500)
    }

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <LazyImage src={props.dish.img}/>
                <div className="card-body">
                    <h4 className="card-title">
                        {props.dish.name}
                    </h4>
                    <p className="text-muted">{props.dish.category.name}</p>
                    <h5>AZN {props.dish.price.toFixed(2)}</h5>
                    <p className="card-text">{props.dish.description}</p>
                </div>
                <div className="card-footer text-right">
                    <button className="btn btn-menu-item" onClick={addToShoppingBasket}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;