"use client"

import api from '@/http/api'
import styles from './List.module.scss'
import { useEffect, useState } from 'react'
import { Item } from '../Item/Item'
import { useRouter, useSearchParams } from 'next/navigation'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { filterDataAction } from '@/store/filter'
import useDateFormat from '@/hooks/useDateFormat'

export const Lists = ({ date }: any) => {
    const searchParamsFrom = useSearchParams().get('from');
    const searchParamsTo = useSearchParams().get('to');
    const searchParamsDate = useSearchParams().get('date');
    const [data, setData] = useState<any>([
        {
            "_id": "68ecca291b81311e0b8930b4",
            "plate": "da-101-to",
            "driver_name": "dato",
            "seats": [
                {
                    "seat_id": 1,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930ac"
                },
                {
                    "seat_id": 2,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930ad"
                },
                {
                    "seat_id": 3,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930ae"
                },
                {
                    "seat_id": 4,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930af"
                },
                {
                    "seat_id": 5,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930b0"
                },
                {
                    "seat_id": 6,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930b1"
                },
                {
                    "seat_id": 7,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930b2"
                },
                {
                    "seat_id": 8,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930b3"
                }
            ],
            "direction_from": searchParamsFrom,
            "direction_to": searchParamsTo,
            // "date": "2025-10-21T10:00:00.000Z",
            "date": `2025-${useDateFormat(new Date()).getMonth()}-${useDateFormat(new Date()).getDate()}T15:00:00.000Z`,
            "getDate": `${useDateFormat(new Date()).getDate()}-${useDateFormat(new Date()).getMonth()}`,
            "getTime": "15:00",
            "seat_count": 8,
            "createdAt": "2025-10-13T09:45:13.724Z",
            "__v": 0
        },
        {
            "_id": "34fsccdce3ca0b8930b4",
            "plate": "gi-101-oo",
            "driver_name": "gio",
            "seats": [
                {
                    "seat_id": 1,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930ac"
                },
                {
                    "seat_id": 2,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930ad"
                },
                {
                    "seat_id": 3,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930ae"
                },
                {
                    "seat_id": 4,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930af"
                },
                {
                    "seat_id": 5,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930b0"
                },
                {
                    "seat_id": 6,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930b1"
                },
                {
                    "seat_id": 7,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930b2"
                },
                {
                    "seat_id": 8,
                    "reserved": false,
                    "_id": "68ecca291b81311e0b8930b3"
                }
            ],
            "direction_from": searchParamsFrom,
            "direction_to": searchParamsTo,
            // "date": "2025-10-21T10:00:00.000Z",
            "date": `2025-${useDateFormat(new Date()).getMonth()}-${useDateFormat(new Date()).getDate()}T17:00:00.000Z`,
            "getDate": `${useDateFormat(new Date()).getDate()}-${useDateFormat(new Date()).getMonth()}`,
            "getTime": "17:00",
            "seat_count": 8,
            "createdAt": "2025-10-13T09:45:13.724Z",
            "__v": 0
        },
    ])
    const [loading, setLoading] = useState(true)
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

    useEffect(() => {
        setLoading(true)
        api(`cars?from=${searchParamsFrom}&to=${searchParamsTo}&getDate=${searchParamsDate}`)
            .then((res: any) => {
                console.log(res)
                // setData([])
                // setData(res)
            })
            .finally(() => {
                setLoading(false)
                dispatch(filterDataAction.changeFilterFrom(searchParamsFrom))
                dispatch(filterDataAction.changeFilterTo(searchParamsTo))
                // dispatch(filterDataAction.changeFilterDate(searchParamsDate))
            })
    }, [searchParamsFrom, searchParamsTo, searchParamsDate])


    const x = useDateFormat(new Date()).getDate()

    const y = useDateFormat(new Date()).getYear()
    const d = useDateFormat(new Date(`${y}-${searchParamsDate?.split('-')[1]}-${searchParamsDate?.split('-')[0]}`)).getDate()
    const m = useDateFormat(new Date(`${y}-${searchParamsDate?.split('-')[1]}-${searchParamsDate?.split('-')[0]}`)).getMonth()

    return (
        <div className={styles.list}>
            {
                loading && <Loader />
            }
            {
                data && data?.map((item: any) => {
                    console.log(new Date(`${y}-${m}-${d}`), new Date(item?.date))
                    if (new Date(`${y}-${m}-${d}`).getTime() < new Date(item?.date).getTime()) {
                        return (
                            <Item key={item._id} item={item} />
                        )
                    }
                })
            }
        </div>
    )
}