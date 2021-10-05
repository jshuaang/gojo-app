import { createSlice } from "@reduxjs/toolkit";

const state = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
    totalPrice: null
}

const locationSlice = createSlice({
    name: 'location',
    initialState: state,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload
        }
    }
})

export const {setOrigin, setDestination, setTravelTimeInformation, setTotalPrice} = locationSlice.actions

// selector
export const selectOrigin = (state) => state.location.origin
export const selectDestination = (state) => state.location.destination
export const selectTravelTimeInformation = (state) => state.location.travelTimeInformation
export const selectTotalPrice = (state) => state.location.totalPrice

export default locationSlice.reducer