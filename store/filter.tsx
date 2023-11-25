import useDateFormat from "@/hooks/useDateFormat";
import { createSlice } from "@reduxjs/toolkit";

const initalData = {
    from: '',
    to: '',
    date:  String(new Date()),
    calendarDate:  String(new Date()),
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
        },
        changeCalendarDate(state, action) {
            state.calendarDate = action.payload
        }
    }
})

export const filterDataAction = filterData.actions

export default filterData.reducer