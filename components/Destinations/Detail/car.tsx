"use client"

import { useEffect, useState } from 'react'
import styles from './Detail.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { userTicketAction } from '@/store/user'
import api from '@/http/api'
import axios from 'axios'


export const Car = ({data}: any) => { 
    console.log(data)   

    const handlClick = async (item:any) => {
        console.log(item, data)
        await axios.patch(`http://localhost:8000/cars/reserve-seat?car_id=${data._id}&seat_id=${item.seat_id}`)
    }



    return (
        data && data.seats && (
            <div className={styles.car}>
                <div className='row'>
                    <div className='col-4' key={0} >
                        <div 
                            style={{backgroundColor: 'unset'}}
                            className={styles.seat}
                            >
                                driver
                        </div>
                    </div>
                    {data.seats.map((item:any, key:number) => {
                        return (
                            <div className='col-4' key={item.seat_id} >
                                <div 
                                    place-id={item.placeId}
                                    place-status={item.isFree ? 'true' : 'false'}
                                    className={`${styles.seat}`}
                                    onClick={ (e:any) => handlClick(item)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    )
}