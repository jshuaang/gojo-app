import {createSlice} from '@reduxjs/toolkit'

const state = {
    totalItem: 0,
    totalValue: 0,
    restId: null
}

const itemSlice = createSlice({
    name: 'item',
    initialState: state,
    reducers: {
        setTotalItem: (state, action) => {
            state.totalItem = action.payload
        },
        setTotalValue: (state, action) => {
            state.totalValue = action.payload
        },
        setRestId: (state, action) => {
            state.restId = action.payload
        }
    }
})

export const {setTotalItem, setTotalValue, setRestId} = itemSlice.actions

// selector
export const getTotalItem = (state) => state.item.totalItem
export const getTotalValue = (state) => state.item.totalValue
export const getRestId = (state) => state.item.restId

export default itemSlice.reducer