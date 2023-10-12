"use client"

import api from '@/http/api'
import styles from './List.module.scss'
import { useEffect, useState } from 'react'
import {Item} from '../Item/Item'
import { useSearchParams } from 'next/navigation'
import Skeleton from '@/components/Skeleton/Skeleteno'
import Loader from './Loader'

export const Lists = () => {
    const [data,setData] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const searchParamsFrom = useSearchParams().get('from');
    const searchParamsTo = useSearchParams().get('to');
    const searchParamsDate = useSearchParams().get('date');

    useEffect(()=>{
        setData([])
        api(`cars?from=${searchParamsFrom}&to=${searchParamsTo}`)
        .then((res:any)=> {
            res?.map((item:any) => {
                setData((e:any) => [...e, item])
            })
        })
        .finally(()=>{
            setLoading(false)
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