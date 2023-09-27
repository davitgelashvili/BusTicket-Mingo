import { createSlice } from "@reduxjs/toolkit";

const initalData = {
    tickets: []
}

const userTicket = createSlice({
    name: 'tickets',
    initialState: initalData,
    reducers: {
        changeTicketList(state, action) {
            state.tickets = action.payload
        }
    }
})

export const userTicketAction = userTicket.actions

export default userTicket.reducer