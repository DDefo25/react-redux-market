import { configureStore } from "@reduxjs/toolkit";
import itemListReducer from "./containers/ItemsList";
import itemReducer from "./containers/AddItem";

export const store = configureStore({
    reducer: {
        item: itemReducer,
        itemList: itemListReducer,
    },
});