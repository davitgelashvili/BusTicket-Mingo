"use client"

import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import { useDispatch, useSelector } from "react-redux"
import { filterDataAction } from '@/store/filter'
import useDateFormat from "@/hooks/useDateFormat"

const Calendar = () => {
    const [date, setDate] = useState(new Date())
    const dispatch = useDispatch()
    const filter = useSelector((state:any) => state.filterData)
    const getDate = `${useDateFormat(date).getDate()}-${useDateFormat(date).getMonth()}`

    useEffect(()=>{
        dispatch(filterDataAction.changeFilterDate(getDate))
    }, [filter])

    return (
        <div>
            <DatePicker
                selected={date}
                inline={true}
                minDate={new Date()}
                calendarStartDay={1}
                onChange={(date:any) => {
                    setDate(date)
                }}
            />
        </div>
    )
}

export default Calendar