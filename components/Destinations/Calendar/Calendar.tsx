"use client"

import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import { useDispatch, useSelector } from "react-redux"
import { filterDataAction } from '@/store/filter'
import useDateFormat from "@/hooks/useDateFormat"

const Calendar = () => {
    const [date, setDate] = useState('')
    const dispatch = useDispatch()
    const filter = useSelector((state:any) => state.filterData)

    useEffect(()=>{
        // ${useDateFormat(date).getDate()}-${useDateFormat(date).getMonth()}
        // dispatch(filterDataAction.changeFilterDate(filter.date))
    },[])

    return (
        <div>
            <DatePicker
                selected={new Date(`${filter.date.split('-')[1]}/${filter.date.split('-')[0]}/2023`)}
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