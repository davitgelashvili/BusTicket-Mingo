import { configureStore } from "@reduxjs/toolkit";
import userTicket from './user'
import filterData from './filter'
import translate from "./translate";

export const store = configureStore({
    reducer: {
        userTicket,
        filterData,
        translate
    }
})