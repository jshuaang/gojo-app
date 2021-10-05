import { configureStore } from "@reduxjs/toolkit";
import locationReducer from './reducer/locationSlice'
import itemReducer from './reducer/itemSlice'

const store = configureStore({
    reducer: {
        location: locationReducer,
        item: itemReducer
    }
})

export default store