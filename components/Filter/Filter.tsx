"use client"

import { useEffect, useState } from 'react'
import styles from './Filter.module.scss'
import DatePicker from 'react-datepicker'
import { useRouter, useSearchParams } from 'next/navigation'
import CustomSelect from '../UI/CustomSelect/CustomSelect'
import CustomCalendar from '../UI/CustomCalendar/CustomCalendar'
import fromIcon from '@/public/img/filter/Circle.svg'
import toIcon from '@/public/img/filter/Location.svg'
import dateIcon from '@/public/img/filter/Date.svg'
import useDateFormat from '@/hooks/useDateFormat'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { filterDataAction } from '@/store/filter'
import useCityTitle from '@/hooks/useCityTitle'

export const Filter = () => {
    const [fullDate, setFullDate] = useState(new Date())
    const router = useRouter()
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const filter = useSelector((state:any) => state.filterData)
    const getDate = `${useDateFormat(fullDate).getDate()}-${useDateFormat(fullDate).getMonth()}`

    const options = [
        { value: 'tbilisi', label: useCityTitle('tbilisi') },
        { value: 'batumi', label: useCityTitle('batumi') },
        { value: 'poti', label: useCityTitle('poti') }
    ]
    
    useEffect(()=>{
        dispatch(filterDataAction.changeFilterDate(getDate))
    }, [getDate])

    return (
        <div className={styles.filter}>
            <div className='container'>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <CustomSelect 
                            icon={fromIcon} 
                            title={t('filter.from')} 
                            options={options} 
                            selected={filter.from}
                            onChange={(e: any) => {
                                dispatch(filterDataAction.changeFilterFrom(e))
                            }}/>
                    </div>
                    <div className={styles.item}>
                        <CustomSelect 
                            icon={toIcon} 
                            title={t('filter.to')} 
                            options={options} 
                            selected={filter.to}
                            onChange={(e: any) => {
                                dispatch(filterDataAction.changeFilterTo(e))
                            }}/>
                    </div>
                    <div className={styles.item}>
                        <CustomCalendar 
                            icon={dateIcon} 
                            title={t('filter.date')} 
                            value={filter.date}
                            >
                            <DatePicker
                                className={'filter-calendar'}
                                selected={new Date(filter.calendarDate)}
                                inline={true}
                                minDate={new Date()}
                                onChange={(date:any) => {
                                    setFullDate(date)
                                    dispatch(filterDataAction.changeCalendarDate(String(date)))
                                }}
                            />
                        </CustomCalendar>
                    </div>
                    <div className={`${styles.send} d-flex align-items-center justify-content-end`}>
                        <button
                            className={styles.btn}
                            onClick={() => {
                                if(
                                    filter.from !== ''&&
                                    filter.to !== ''
                                ) {
                                    router.push(`destination?from=${filter.from}&to=${filter.to}&date=${filter.date}`)
                                }
                            }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}