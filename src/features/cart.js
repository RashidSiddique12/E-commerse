import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const productObj = action.payload;

            const product = state.find(
                (stateObj) => productObj.id === stateObj.id
            );

            if (product) {
                product.qty++;
            } else {
                const obj = { ...productObj, qty: 1 };
                state.push(obj);
            }
        },
        incrementItem: () => {

        },
        decrementItem: () => {
            
        },
        removeItemFromCart:(state, action) =>{
            const productId = action.payload;
            const otherProduct = state.value.filter((curProduct)=> curProduct.id !== productId);
            state.value = otherProduct;
        }
    }
});

export default cartSlice.reducer;

export const { addToCart, removeItemFromCart } = cartSlice.actions;
