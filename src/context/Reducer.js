const cartReducer = (state, action)=>{
    switch (action.type) {
        case "LOAD_PRODUCTS":
            return {...state, products:[...action.payload] };
        case "ADD_TO_CART":
            console.log('Button clicked')
            return {...state, cart:[...state.cart,{...action.payload,qty:1}] }
        case "REMOVE_FROM_CART": 
            console.log('Button Clicked',action.payload);
            return {...state, cart: state.cart.filter((item)=>item.id !==action.payload)}
        default:
            return state;
    }
}

export default cartReducer;