"use client"

import { useEffect, useState } from 'react'
import styles from './Filter.module.scss'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { useRouter } from 'next/navigation'
import CustomSelect from '../UI/CustomSelect/CustomSelect'
import CustomCalendar from '../UI/CustomCalendar/CustomCalendar'
import fromIcon from '@/public/img/filter/Circle.svg'
import toIcon from '@/public/img/filter/Location.svg'
import dateIcon from '@/public/img/filter/Date.svg'
import useDateFormat from '@/hooks/useDateFormat'
import { useTranslation } from 'react-i18next'

const options = [
    { value: 'tbilisi', label: 'თბილისი' },
    { value: 'batumi', label: 'ბათუმი' },
    { value: 'poti', label: 'ფოთი' }
]

export const Filter = () => {
    const router = useRouter()
    const {t} = useTranslation()

    const [data, setData] = useState({
        from: '',
        to: '',
        date: new Date()
    })

    useEffect(()=>{
        console.log(data)
    }, [data])

    return (
        <div className={styles.filter}>
            <div className='container'>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <CustomSelect 
                            icon={fromIcon} 
                            title={t('filter.from')} 
                            options={options} 
                            onChange={(e: any) => {
                                setData({
                                    ...data,
                                    from: e,
                                })
                            }}/>
                    </div>
                    <div className={styles.item}>
                        <CustomSelect 
                            icon={toIcon} 
                            title={t('filter.to')} 
                            options={options} 
                            onChange={(e: any) => {
                                setData({
                                    ...data,
                                    to: e,
                                })
                            }}/>
                    </div>
                    <div className={styles.item}>
                        <CustomCalendar 
                            icon={dateIcon} 
                            title={t('filter.date')} 
                            value={`${useDateFormat(data.date).getDate()} / ${useDateFormat(data.date).getMonth()}`}
                            >
                            <DatePicker
                                className={'filter-calendar'}
                                selected={data.date}
                                inline={true}
                                minDate={new Date()}
                                onChange={(date:any) => setData({
                                        ...data,
                                        date: date,
                                    })
                                }
                            />
                        </CustomCalendar>
                    </div>
                    <div className={`${styles.send} d-flex align-items-center justify-content-end`}>
                        <button
                            className={styles.btn}
                            onClick={() => {
                                if(
                                    data.from !== ''&&
                                    data.to !== ''
                                ) {
                                    router.push(`destination?from=${data.from}&to=${data.to}&date=${data.date.getTime()}`)
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