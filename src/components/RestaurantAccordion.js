import React from 'react';
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import {useSelector, useDispatch} from 'react-redux';
import addItem from '../actions/addItem'


export default function RestaurantAccordion(props) {

    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    
    function add (item) {
        
        if (!state.selectedCategories) {
            dispatch(addItem("selectedCategories", [item.name]))
        } else {
            const currentSelected = item.name
            const selectedArray = state.selectedCategories

            if (selectedArray.includes(currentSelected)) {
                selectedArray.splice(selectedArray.indexOf(item.name), 1)
                dispatch(addItem("selectedCategories", selectedArray))
            } else {
                selectedArray.push(currentSelected)
                dispatch(addItem("selectedCategories", selectedArray))
            }
            
        }
        
    }

    return (
        
        <AccordionItem>
            <AccordionItemHeading onClick={()=> dispatch(addItem("selectedRestaurant", props.restaurant))} >
                <AccordionItemButton >
                    <img className="img-fluid restaurants-logo" src={props.restaurant.logo}/>
                    {props.restaurant.name}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel >
                {props.restaurant.categories.map((item, index) => {
                    
                    let className = "accordion-filter-item"
                    
                    if (state.selectedCategories.includes(item.name)) {
                        className = "accordion-filter-item filter-item-is-active"
                    }

                    return <div onClick={()=>add(item)} className={className}>
                        
                        <span>{item.name}</span>
                    </div>
                })}
                </AccordionItemPanel>
            </AccordionItem>
    );
}