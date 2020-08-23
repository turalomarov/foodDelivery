import React from 'react';
import MenuItem from './MenuItem'

const Menu = (props) => {
    return (
    <div className="row">
        {props.menu.map((item)=>{
            

            if (item.stock > 0) {
                if (!props.selectedCategories || !props.selectedCategories.length) {
                return <MenuItem dish={item}/>
            } else {
                if (props.selectedCategories.includes(item.category.name)) {
                    return <MenuItem dish={item}/>
                }
            }
            }
        })}
    </div>);
}

export default Menu;