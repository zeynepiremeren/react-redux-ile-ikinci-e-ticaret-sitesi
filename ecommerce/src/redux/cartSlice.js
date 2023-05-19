import { createSlice } from "@reduxjs/toolkit";






const fetchFromLocalStorage = ()=> {
    let carts = localStorage.getItem('cart');
    if(carts){
        return JSON.parse(localStorage.getItem('cart'))
    }else {
        return[]
    }
}

const storeInlocalStorage= (data)=>{
    localStorage.setItem('cart', JSON.stringify(data))
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,

} 



const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
      addToCart:(state,action)=>{
        const isItemCart = state.carts.find(item => item.id === action.payload.id)

        if(isItemCart){
            const tempCart = state.carts.map(item =>{
                if(item.id === action.payload.id){
                    let tempQty = item.quantity + action.payload.quantity;
                    let tempTotalPrice = tempQty + item.price;
                    return{
                        ...item, quantity:tempQty, totalPrice: tempTotalPrice
                    }
                } else{
                    return item
                }
            })
            state.carts = tempCart;
            storeInlocalStorage(state.carts)
        } else{
            state.carts.push(action.payload)
            storeInlocalStorage(state.carts)
        }
      },
      removeFromCart: (state,action)=>{
        const tempCart = state.carts.filter(item => item.id !== action.payload)
        state.carts = tempCart
        storeInlocalStorage(state.carts)
      },
      clearCart: (state)=>{
        state.carts =[]
        storeInlocalStorage(state.carts)
      },
      getCartTotal: (state)=>{
        state.totalAmount = state.carts.reduce((cartTotal,cartItem)=>{
            return cartTotal += cartItem.price 
        },0)
        state.itemCount = state.carts.length
      },
   
    }

})

export const {addToCart,removeFromCart,clearCart,getCartTotal} = cartSlice.actions
export default cartSlice.reducer