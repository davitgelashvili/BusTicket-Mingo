"use client"

import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import { useDispatch, useSelector } from "react-redux"
import { filterDataAction } from '@/store/filter'
import useDateFormat from "@/hooks/useDateFormat"
import { useRouter, useSearchParams } from "next/navigation"
import api from "@/http/api"
import { Datepicker, DatepickerEvent } from "@meinefinsternis/react-horizontal-date-picker"
import { ka } from "date-fns/locale";
import styles from './Calendar.module.scss'

const Calendar = () => {
    const filter = useSelector((state:any) => state.filterData)
    const router = useRouter()
    const searchParamsFrom = useSearchParams().get('from');
    const searchParamsTo = useSearchParams().get('to');
    const searchParamsDate = useSearchParams().get('date');
    const [date, setDate] = useState<String>(String(new Date()));
    const dispatch = useDispatch()
    const urlDate = `${useDateFormat(filter.date).getDate()}-${useDateFormat(filter.date).getMonth()}`

    const handleChange = (d: DatepickerEvent) => {
        setDate(String(d[0]))
    };

    useEffect(()=>{
        dispatch(filterDataAction.changeFilterDate(String(date)))
    },[date, dispatch])
    
    useEffect(()=>{
        router.push(`destination?from=${searchParamsFrom}&to=${searchParamsTo}&date=${urlDate}`)
    },[filter.date])

    return (
        <div className={styles.calendar}>
            <Datepicker 
                onChange={handleChange}
                locale={ka}
                startValue={new Date(filter.date)}
                endValue={new Date(filter.date)}
                startDate={new Date()}
            
            />
        </div>
    )
}

export default Calendar