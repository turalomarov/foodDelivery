import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Accordion } from 'react-accessible-accordion'
import RestaurantAccordion from './RestaurantAccordion';
import Menu from './Menu';
import emptyBasket from '../actions/emptyBasket';

const Main = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [isExapnded, setIsExpanded] = useState(false)

    const renderMenu = () => {

        if (isExapnded) {
            return <Menu menu={state.selectedRestaurant.menu} selectedCategories={state.selectedCategories} />
        } else {
            return <div className="jumbotron p-4 d-flex flex-column justify-content-center">
                <h1 className="display-3">Welcome To Our Store</h1>
                <p className="lead">We bring yummy food to you! Choose a restaurant and send your order. We'll deliver that juicy taco or vegan burger to you in 30 minutes.</p>
            </div>
        }
    }

    function toogleExpanded(uuid) {

        if (!uuid.length) {
            setIsExpanded(false)
        } else {
            setIsExpanded(true)
        }

        dispatch(emptyBasket())

    }


    return (
        <div className="container main-container">

            <div className="row">

                <div className="col-lg-3 my-4">
                    <div className="side-accordion">

                        <Accordion onChange={(uuid) => toogleExpanded(uuid)} allowZeroExpanded={true}>
                            {state.db.map((item, index) => {
                                return <RestaurantAccordion restaurant={item} />
                            })}
                        </Accordion>

                    </div>
                </div>

                <div className="col-lg-9 my-4">

                    <div className="">
                        {renderMenu()}
                    </div>
                    {// /.row 
                    }

                </div>
                {// /.col-lg-9 
                }

            </div>
            {// /.row 
            }

        </div>
    );
}

export default Main;