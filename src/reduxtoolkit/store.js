import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './counterSlice'

const Store = configureStore({
    reducer:{
        counter: CounterReducer
    }
})
export default Store;