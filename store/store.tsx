import { configureStore } from "@reduxjs/toolkit";
import userTicket from './user'
import filterData from './filter'

export const store = configureStore({
    reducer: {
        userTicket,
        filterData
    }
})