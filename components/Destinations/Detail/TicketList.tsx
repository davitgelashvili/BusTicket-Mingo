"use client"

import { userTicketAction } from "@/store/user"
import { stat } from "fs"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './Detail.module.scss'

const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const {userTicket} = useSelector((state:any) => state)
    const dispatch = useDispatch()

    useEffect(()=>{
        setTickets(userTicket.tickets)
    }, [userTicket.tickets])

    function handleClick(item:any, key:any) {
    
    }

    return (
        <div className={styles.tickets}>
            <div className={styles.header}>

            </div>
            {
                userTicket && userTicket?.tickets.map( (item:any, key:any) => {
                    if(item.placeId){
                        return (
                            <div key={item.placeId}>
                                <h1>ადგილი: {item.placeId}</h1>
                                <button onClick={ () => {
                                    handleClick(item, key)
                                }}>
                                    წაშლა
                                </button>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default TicketList