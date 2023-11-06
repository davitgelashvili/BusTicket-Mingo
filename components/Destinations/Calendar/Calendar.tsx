"use client"

import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import { useDispatch, useSelector } from "react-redux"
import { filterDataAction } from '@/store/filter'
import useDateFormat from "@/hooks/useDateFormat"
import { useRouter, useSearchParams } from "next/navigation"

const Calendar = () => {
    const router = useRouter()
    const [fullDate, setFullDate] = useState()
    const dispatch = useDispatch()
    const getDate = `${useDateFormat(fullDate).getDate()}-${useDateFormat(fullDate).getMonth()}`
    const searchParamsFrom = useSearchParams().get('from');
    const searchParamsTo = useSearchParams().get('to');
    const searchParamsDate = useSearchParams().get('date');
    const filter = useSelector((state:any) => state.filterData)
    
    useEffect(()=>{
        router.push(`destination?from=${searchParamsFrom}&to=${searchParamsTo}&date=${getDate}`)
    }, [getDate])

    useEffect(()=>{
        dispatch(filterDataAction.changeFilterFrom(searchParamsFrom))
        dispatch(filterDataAction.changeFilterTo(searchParamsTo))
        dispatch(filterDataAction.changeFilterDate(searchParamsDate))
        router.push(`destination?from=${searchParamsFrom}&to=${searchParamsTo}&date=${searchParamsDate}`)
    }, [searchParamsFrom, searchParamsTo, searchParamsDate])

    return (
        <div>
            <DatePicker
                selected={new Date(filter.calendarDate)}
                inline={true}
                minDate={new Date()}
                calendarStartDay={1}
                onChange={(date:any) => {
                    setFullDate(date)
                    dispatch(filterDataAction.changeCalendarDate(String(date)))
                }}
            />
        </div>
    )
}

export default Calendar