import { createContext, useReducer, useContext} from "react";
import cartReducer,{productReducer} from "./Reducer";
const Cart = createContext();



const Context =({children})=>{

    const [state, dispatch]= useReducer(cartReducer, {
        products:[],
        cart:[]
    });
    const [productState, productDispatch]= useReducer(productReducer, {
       byStock:false,
       byFastDelivery:false,
       byRating:0,
       searchQuery:''

    })

    return(
        <Cart.Provider value={{state, dispatch, productState, productDispatch }}>
            {children} 
        </Cart.Provider>
    )
}

const ContextValue =()=>{
    return useContext(Cart);
} 

export default Context;
export {ContextValue};