"use client"

import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import { useDispatch, useSelector } from "react-redux"
import { filterDataAction } from '@/store/filter'
import useDateFormat from "@/hooks/useDateFormat"
import { useRouter } from "next/navigation"

const Calendar = ({setDate, date}: any) => {
    // const [date, setDate] = useState(new Date())
    const router = useRouter()
    const dispatch = useDispatch()
    const filter = useSelector((state:any) => state.filterData)

    useEffect(()=>{
        // router.push(`destination?from=${filter.from}&to=${filter.to}&date=${filter.date}`)
    }, [filter])

    return (
        <div>
            <DatePicker
                selected={new Date(`${filter.date.split('-')[1]}/${filter.date.split('-')[0]}/2023`)}
                inline={true}
                minDate={new Date()}
                calendarStartDay={1}
                onChange={(date:any) => {
                    dispatch(filterDataAction.changeFilterDate(`${useDateFormat(date).getDate()}-${useDateFormat(date).getMonth()}`))
                    // router.push(`destination?from=${filter.from}&to=${filter.to}&date=${filter.date}`)
                }}
            />
        </div>
    )
}

export default Calendar