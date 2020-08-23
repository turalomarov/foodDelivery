import RestaurantsList from '../db/RestaurantsList'

const initialState = {
    db: RestaurantsList,
    basket: [],
    selectedCategories: [],
    total: 0,
    isSignedIn: false,
    user: {}
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "ADD_ITEM":
            return { ...state, [action.id]: action.data }
        
        case "ADD_TO_BASKET":

            const existedItem = state.basket.find(item => item.name === action.data.name)
            const dbItem = state.selectedRestaurant.menu.find(item=>item.name === action.data.name)
            
                if (existedItem) {
                    
                    if (existedItem.count < dbItem.stock) {
                    existedItem.count += 1
    
                    return { ...state, total: state.total + existedItem.price }
                    } else {
                        alert("Stock is Empty")
                        return state
                    }
                    
                } else {
    
                    let newTotal = state.total + action.data.price
    
                    return {
                        ...state,
                        basket: [...state.basket, action.data],
                        total: newTotal
                    }
                }
        case "REMOVE_FROM_BASKET":
            const itemToRemove = state.basket.find(item => item.name === action.data.name)
            const filteredBasket = state.basket.filter(item => item.name !== action.data.name)

            let newTotal = state.total - (itemToRemove.price * itemToRemove.count)
            return {
                ...state,
                basket: filteredBasket,
                total: newTotal
            }

        case "ADD_QUANTITY":
            const itemToAdd = state.basket.find(item => item.name === action.data.name)
            const selectedItem = state.selectedRestaurant.menu.find(item=>item.name === action.data.name)
            itemToAdd.count += 1

            if (itemToAdd.count < selectedItem.stock) {
                return {
                    ...state,
                    total: state.total + action.data.price
                }
            } else {
                alert("Stock Is Empty")
                return state
            }
            
        case "REDUCE_QUANTITY":
            const itemToReduce = state.basket.find(item=>item.name === action.data.name)
            if (itemToReduce.count === 1) {
                const filteredBasket = state.basket.filter(item=> item.name !== action.data.name)
                return {
                    ...state,
                    basket: filteredBasket,
                    total: state.total - itemToReduce.price
                }
            } else {
                itemToReduce.count -= 1
                return {
                    ...state,
                    total: state.total - itemToReduce.price
                }
            }
        case "UPDATE_STOCKS":

            const restaurantToUpdate = state.db.find(item=> item.id === state.selectedRestaurant.id)
           
            state.basket.map((basketItem)=> {
                const itemToUpdate = restaurantToUpdate.menu.find(item=>item.name === basketItem.name)
                itemToUpdate.stock -= basketItem.count
            })

            return {
                ...state, 
                basket: [],
                total: 0
            }
        case "EMPTY_BASKET":
            return {
                ...state, 
                basket: [],
                total: 0,
                selectedCategories: []
            }
        default:
            return state
    }

}

export default reducer;