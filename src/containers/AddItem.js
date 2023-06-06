import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    price: '',
    avatar: '',
    isSale: false,
    priceSale: '',
}

export const item = createSlice({
    name: 'item',
    initialState,
    reducers: {
        toggleSale: (state) => {
            state.isSale = !state.isSale
        },
        changeField: (state, action) => {
            const {name, value} = action.payload
            state[name] = value
        },
        clearField: (state, action) => {
            const {name} = action.payload
            state[name] = ''
        }
    }
}) 

export const {toggleSale, changeField, clearField} = item.actions;

export default item.reducer