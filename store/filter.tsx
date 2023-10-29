import useDateFormat from "@/hooks/useDateFormat";
import { createSlice } from "@reduxjs/toolkit";

const initalData = {
    from: '',
    to: '',
    date:  `${useDateFormat(new Date()).getDate()}-${useDateFormat(new Date()).getMonth()}`,
}

const filterData = createSlice({
    name: 'filter',
    initialState: initalData,
    reducers: {
        changeFilterFrom(state, action) {
            state.from = action.payload
        },
        changeFilterTo(state, action) {
            state.to = action.payload
        },
        changeFilterDate(state, action) {
            state.date = action.payload
        }
    }
})

export const filterDataAction = filterData.actions

export default filterData.reducer