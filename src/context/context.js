import { createContext, useReducer, useContext} from "react";
import cartReducer from "./Reducer";
const Cart = createContext();



const Context =({children})=>{

    const [state, dispatch]= useReducer(cartReducer, {
        products:[],
        cart:[]
    })

    return(
        <Cart.Provider value={{state, dispatch}}>
            {children} 
        </Cart.Provider>
    )
}

const ContextValue =()=>{
    return useContext(Cart);
} 

export default Context;
export {ContextValue};