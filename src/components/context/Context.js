import { createContext, useContext } from "react";
import { useReducer, useEffect } from "react";
import foodMenu from '../../Data/foodMenu.json'

const OrderCart = createContext();

const initialState = {
    items: [],
    totalCount:0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': return { ...state, items:searchItem(state.items,action.payload) }
        case 'REMOVE_ITEM': return {...state, items:state.items.filter( (item) => item.id !== action.payload ) }
        case 'INC_ITEM__COUNT': return {...state, items:state.items.filter((item) => item.id === action.payload ? (item.totalItems += 1 , item.totalPrice = totalPerItem(item)): item )}
        case 'DEC_ITEM__COUNT': return {...state, items:state.items.filter((item) => item.id === action.payload ? (item.totalItems > 1 && (item.totalItems -= 1), item.totalPrice = totalPerItem(item)) : item )}
        case 'TOTAL_COUNT' : return {...state, totalCount:action.payload}
        case 'REMOVE_ALL_ITEMS' : return {...state, items:[]}
        default: return state;
    }

}

const searchItem = (items, data) => {
    let isPresent = false;

    isPresent = items.some((item) =>
        item.id === data);

    if (!isPresent) {
        let item = foodMenu.find((item) => item.id === data )
        item.totalItems = 1;
        item.totalPrice = item.price;
        return [...items, item]
    }
    else {
        return items;
    }
}

const totalPerItem = (item) => {
    let count = item.price;
    count = item.totalItems*item.price
    let newCount = count.toFixed(2)
    return parseFloat(newCount);
}


const Context = ({ children }) => {
    const [ordersList, dispatch] = useReducer(reducer, initialState)

    const { items } = ordersList
    useEffect( () => {
        let count = 0;
        items.forEach( item => {
            count += item.totalPrice
        })

        let newCount = count.toFixed(2)
        dispatch({type:'TOTAL_COUNT',payload:newCount})
    },[items,dispatch])
    

    return <OrderCart.Provider value={{ordersList, dispatch}} >{children}</OrderCart.Provider>
}

export default Context

export const OrderedState = () =>{
    return useContext(OrderCart)
}