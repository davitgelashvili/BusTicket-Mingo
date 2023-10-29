"use client"

import api from '@/http/api'
import styles from './List.module.scss'
import { useEffect, useState } from 'react'
import {Item} from '../Item/Item'
import { useRouter, useSearchParams } from 'next/navigation'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { filterDataAction } from '@/store/filter'

export const Lists = ({date}:any) => {
    const router = useRouter()
    const [data,setData] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const searchParamsFrom = useSearchParams().get('from');
    const searchParamsTo = useSearchParams().get('to');
    const searchParamsDate = useSearchParams().get('date');
    const filter = useSelector((state:any) => state.filterData)
    const dispatch = useDispatch()

    useEffect(()=>{
        router.push(`destination?from=${filter.from}&to=${filter.to}&date=${filter.date}`)
        setLoading(true)
        api(`cars?from=${searchParamsFrom}&to=${searchParamsTo}&getDate=${searchParamsDate}`)
        .then((res:any)=> {
            setData([])
            res?.map((item:any) => {
                setData((e:any) => [...e, item])
            })
        })
        .finally(()=>{
            setLoading(false)
            dispatch(filterDataAction.changeFilterFrom(searchParamsFrom))
            dispatch(filterDataAction.changeFilterTo(searchParamsTo))
            dispatch(filterDataAction.changeFilterDate(searchParamsDate))
        })
    },[searchParamsFrom, searchParamsTo, searchParamsDate])

    return (
        <div className={styles.list}>
            {
                loading && <Loader />
            }
            {
                data?.map((item:any) => {
                    return (
                        <Item key={item._id} item={item} />
                    )
                })
            }
        </div>
    )
}