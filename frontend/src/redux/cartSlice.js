import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct:(state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        addProductEnd: (state, action) => {
            state.quantity = 1;
            
        },

        removeProduct: (state, action) => {
            state.quantity -= 1;
            // xoá 1 phần tử  trong mảng với action
            // 
        }

        
    }
})

export const {addProduct, addProductEnd} = cartSlice.actions;
export default cartSlice.reducer;