import { configureStore } from "@reduxjs/toolkit";
import userTicket from './user'

export const store = configureStore({
    reducer: {
        userTicket
    }
})