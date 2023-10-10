"use client"

import { useEffect, useState } from 'react';
import styles from './Detail.module.scss'
import axios from 'axios';

const TicketList = ({data, setLoading, setTickets, tickets}:any) => {
    
    const handleClick = async(tkt:any) => {
        await axios.patch(`http://localhost:8000/cars/delete-reserve?car_id=${data._id}&seat_id=${tkt.seat_id}`)
        .then(()=>{
            setTickets([])
        })
        .finally(()=>{
            setLoading(true)
        })
    }

    return (
        <div className={styles.tickets}>
            <div className={styles.header}>
                <h1>{data.direction_from} - {data.direction_to}</h1>
                <p>{data.date}</p>
            </div>
            <div className={styles.list}>
            {tickets && tickets?.map((item: any, key:any)=> {
                return (
                    <div className={styles.ticket} key={item._id}>
                        <div className={styles.icon}>icon</div>
                        <div className={styles.text}>
                            <h2>მგზავრი {key + 1}</h2>
                            <p>ადგილი {item.seat_id}</p>
                        </div>
                        <button className={styles.btn} onClick={()=> handleClick(item)}>წაშლა</button>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default TicketList