import { createContext, useReducer, useContext} from "react";
import cartReducer from "./Reducer";
const Cart = createContext();



const Context =({children})=>{

    const [state, dispacth]= useReducer(cartReducer, {
        products:[],
        cart:[]
    })

    return(
        <Cart.Provider value={{state, dispacth}}>
            {children} 
        </Cart.Provider>
    )
}

const ContextValue =()=>{
    return useContext(Cart);
} 

export default Context;
export {ContextValue};