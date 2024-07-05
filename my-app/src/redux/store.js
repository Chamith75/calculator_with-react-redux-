import { configureStore } from "@reduxjs/toolkit";
import Slice from "./calculator.slice";


const Store = configureStore({
    reducer:{
       calculator:  Slice.reducer
    }
})

export default Store;