import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter';
import cartReducer from './features/cart';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    }
})

export default store;
