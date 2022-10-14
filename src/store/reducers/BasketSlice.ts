import { createSlice } from "@reduxjs/toolkit";
import { IFoodItem } from "../../types/menu";

export const BasketSlice = createSlice({
    name: "BusketSlice",
    initialState: {
      cartItems: [] as IFoodItem[],
      totalPrice: 0
    },
    reducers: {
      setItemsInCart: (state, action) => {
        state.cartItems = [...state.cartItems, action.payload];
        state.totalPrice = state.cartItems.reduce((sum, i) => sum += i.count! * i.price, 0)
      },
      updateItemInCart: (state, action) => {
        const {id, count} = action.payload

        const index = state.cartItems.findIndex(item => item.id === id);
                
        if(index >= 0){
          if(count === 0){
            state.cartItems = state.cartItems.filter(item => item.id !== id)
          }else{
            const newItem = {
              ...state.cartItems[index],
              count: count
            }
  
            const newCart = state.cartItems.slice();
            newCart.splice(index, 1, newItem);
            state.cartItems = newCart;
          }
        }

        if(state.cartItems.length){
          state.totalPrice = state.cartItems.reduce((sum, i) => sum += i.count! * i.price, 0)
        }else{
          state.totalPrice = 0
        }
      }
    },
});

export const { setItemsInCart, updateItemInCart} = BasketSlice.actions;

export default BasketSlice.reducer;
