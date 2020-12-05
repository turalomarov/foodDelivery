import React, { useState } from 'react';

import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import {useDispatch, useSelector } from 'react-redux';
import addItem from './actions/addItem.js'
import ShoppingCart from './components/ShoppingCart';

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false)
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false)
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

  const toggleShoppingCart = () => {
    setIsOpen(!isOpen)

  }

  const toggleDropDown = () => {
    setDropDownIsOpen(!dropDownIsOpen)
  }

  const toggleMobileNav = () => {
    setMobileNavIsOpen(!mobileNavIsOpen)
  }

  const renderMain = () => {

    if (state.isSignedIn) {
      return <Main />
    } else {
      return <Login />
    }
  }

  const signOut = () => {
    if (isOpen) {
      alert(isOpen)
      setIsOpen(false)
    }
    dispatch(addItem("isSignedIn", false))
  }

  console.log('hello from test branch 4')

  const renderNavigation = () => {
    if (state.isSignedIn) {
      return <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
        <button className="btn btn-primary" id="menu-toggle" onClick={toggleShoppingCart}><i className={!state.basket.length ?"fas fa-shopping-cart" : "fas fa-cart-plus" }></i></button>
        <button onClick={toggleMobileNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class={mobileNavIsOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
          <div className="navbar-nav ml-auto mt-2 mt-lg-0 text-center">
            <div className={dropDownIsOpen ? "nav-item dropdown show" : "nav-item dropdown"}>
              <a onClick={toggleDropDown} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user-circle"></i></a>
              <div className={dropDownIsOpen ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"} aria-labelledby="navbarDropdown">
                <div className="d-flex flex-column p-2">
                <h5>Welcome To Our Website</h5>
                  <p>Logged In as test@email.com</p>
                  <button className="btn btn-secondary align-self-end" onClick={signOut}>Log Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    }
  }

  return (
    <div>

      <div className={!isOpen ? "d-flex" : "d-flex toggled"} id="wrapper">
        <ShoppingCart />
        <div id="page-content-wrapper">
          {renderNavigation()}
          {renderMain()}

        </div>


      </div>

    </div>
  );
}

export default App;
