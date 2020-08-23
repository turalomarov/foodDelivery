import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
import updateStocks from '../actions/updateStocks';
import cart from '../lottie/cart.json';
import LottieComponent from './LottieComponent'

const ShoppingCart = () => {
  const basket = useSelector(state => state.basket)
  const total = useSelector(state => state.total)
  const dispatch = useDispatch()

  if (!!basket.length) {
    return (
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="">
          <h2 className="p-2">Shopping Cart</h2>
        </div>
        <ul className="list-group list-group-flush">
          {basket.map((item, index) => {
            return <ShoppingCartItem key={index} food={item} />
          })}
        </ul>

        <div className="checkout d-flex flex-column">
          <div className="d-flex flex-row justify-content-between total">
            <h5>Total</h5>
            <span>AZN {total.toFixed(2)}</span>
          </div>
          <button className="btn btn-info align-self-end" onClick={() => dispatch(updateStocks())}>Checkout</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-light border-right " id="sidebar-wrapper">
        <div className="">
          <h2 className="p-2">Shopping Cart</h2>
        </div>
        <div className="list-group ">
          <LottieComponent animation={cart} />
        </div>
      </div>
    );
  }

}

export default ShoppingCart;