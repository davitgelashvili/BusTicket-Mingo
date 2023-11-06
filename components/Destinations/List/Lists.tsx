"use client"

import api from '@/http/api'
import styles from './List.module.scss'
import { useEffect, useState } from 'react'
import {Item} from '../Item/Item'
import { useRouter, useSearchParams } from 'next/navigation'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { filterDataAction } from '@/store/filter'
import useDateFormat from '@/hooks/useDateFormat'

export const Lists = ({date}:any) => {
    const router = useRouter()
    const [data,setData] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const [dataListDate, setDataListDate] = useState(false)
    const searchParamsFrom = useSearchParams().get('from');
    const searchParamsTo = useSearchParams().get('to');
    const searchParamsDate = useSearchParams().get('date');
    const filter = useSelector((state:any) => state.filterData)
    const dispatch = useDispatch()
    const time = [
        '07 : 00',
        '08 : 00',
        '09 : 00',
        '10 : 00',
        '11 : 00',
        '12 : 00',
        '13 : 00',
        '14 : 00',
        '15 : 00',
        '16 : 00',
        '17 : 00',
        '18 : 00',
        '19 : 00',
        '20 : 00',
        '21 : 00',
        '22 : 00',
        '23 : 00',
        '23 : 55',
    ]

    useEffect(()=>{
        router.push(`destination?from=${filter.from}&to=${filter.to}&date=${filter.date}`)
        setLoading(true)
        api(`cars?from=${searchParamsFrom}&to=${searchParamsTo}&getDate=${searchParamsDate}`)
        .then((res:any)=> {
            setData([])
            setData(res[0])
            // res?.map((item:any) => {
            //     setData((e:any) => [...e, item])
            // })
        })
        .finally(()=>{
            setLoading(false)
            dispatch(filterDataAction.changeFilterFrom(searchParamsFrom))
            dispatch(filterDataAction.changeFilterTo(searchParamsTo))
            dispatch(filterDataAction.changeFilterDate(searchParamsDate))
        })
    },[searchParamsFrom, searchParamsTo, searchParamsDate])

    useEffect(()=>{
        if(searchParamsDate?.split('-')[0] == useDateFormat(new Date()).getDate()){
            setDataListDate(true)
        }
    }, [dataListDate])

    return (
        <div className={styles.list}>
            {
                loading && <Loader />
            }
            {
                dataListDate ? time.map((t:any) => {
                    if(searchParamsDate?.split('-')[0] == useDateFormat(new Date()).getDate()){
                        if(new Date().getHours() < t.split(' ')[0]){
                            return (
                                <Item key={t} item={data} time={t} />
                            )
                        }
                    }else {
                        return (
                            <Item key={t} item={data} time={t} />
                        )
                    }
                }) : (
                    <h1>ინფორმაცია არ მოიძებნა</h1>
                )
            }
        </div>
    )
}