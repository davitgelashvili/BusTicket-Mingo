"use client"

import { useState } from 'react'
import styles from './Navigation.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'
import DatePicker from 'react-datepicker'

export const Navigation = () => {
    const router = useRouter()
    const searchParamsFrom:any = useSearchParams().get('from');
    const searchParamsTo:any = useSearchParams().get('to');
    const searchParamsDate:any = useSearchParams().get('date');

    const [dateNow, setDateNow] = useState([
        new Date().getDate(),
        new Date().getDate()+1,
        new Date().getDate()+2,
        new Date().getDate()+3,
        new Date().getDate()+4,
        new Date().getDate()+5
    ])
    const [data, setData] = useState({
        from: searchParamsFrom,
        to: searchParamsTo,
        date: searchParamsDate
    })

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const getMonth = new Date().getMonth() + 2 
    const getDate = new Date().getDate() 

    console.log(getMonth)

    return (
        <div className={styles.navigation}>
            {/* <DatePicker
                selected={startDate}
                onChange={onChange}
                minDate={new Date()}
                // თვე - დღე - წელი
                maxDate={new Date(`${getMonth}-${getDate}-2023`)}
                startDate={startDate}
                selectsRange
                inline
                showDisabledMonthNavigation
            /> */}
            {
                dateNow?.map((item, key:any) => {
                    return (
                        <div 
                            key={key + 100}
                            onClick={() => {
                                router.push(`?from=${data.from}&to=${data.to}&date=${item}`)
                            }}
                            className={`${styles.item} ${searchParamsDate == item ? styles.active : ""}`}>
                            {item} სექტემბერი
                        </div>
                    )
                })
            }
        </div>
    )
}