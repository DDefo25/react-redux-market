import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = [
        {
            id: nanoid(),
            name: 'Ирригатор',
            price: 2770,
            avatar: 'https://avatars.mds.yandex.net/get-mpic/4904013/img_id6907482545117004277.jpeg/200x200',
            isSale: true,
            priceSale: 2019,
        },
        {
            id: nanoid(),
            name: 'Коляска-трость прогулочная Junion Bebocabra, цвет розовый',
            price: 5990,
            avatar: 'https://avatars.mds.yandex.net/get-mpic/5250150/img_id9068807699897967935.png/200x200',
            isSale: true,
            priceSale: 3390,
        },
        {
            id: nanoid(),
            name: 'Геймпад Microsoft Xbox Series, Stellar Shift',
            price: 6690,
            avatar: 'https://avatars.mds.yandex.net/get-mpic/4732637/img_id920426565831038341.jpeg/200x200',
            isSale: false,
            priceSale: 0,
        }
]

export const itemList = createSlice({
    name: 'itemList',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const {
                name,
                price,
                avatar,
                isSale,
                priceSale
            } = action.payload
            return state = [...state, { id: nanoid(), name, price: Number(price), avatar, isSale, priceSale: Number(priceSale) }]
        },
    }
}) 

export const {addItem} = itemList.actions;

export default itemList.reducer
