"use client"

import api from '@/http/api'
import styles from './List.module.scss'
import { useEffect, useState } from 'react'
import {Item} from '../Item/Item'
import { useSearchParams } from 'next/navigation'
import useRespons from '@/hooks/useRespons'

export const Lists = () => {
    // const data = useRespons('cars?from=tbilisi&to=batumi')
    const [data,setData] = useState<any>([])
    const searchParamsFrom = useSearchParams().get('from');
    const searchParamsTo = useSearchParams().get('to');
    const searchParamsDate = useSearchParams().get('date');

    useEffect(()=>{
        setData([])
        api(`cars?from=${searchParamsFrom}&to=${searchParamsTo}`)
        .then((res:any)=> {
            console.log(1, res)
            res?.map((item:any) => {
                setData((e:any) => [...e, item])
            })
            
        })
    },[searchParamsFrom, searchParamsTo, searchParamsDate])




    return (
        <div className={styles.list}>
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