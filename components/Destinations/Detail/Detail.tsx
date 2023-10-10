"use client"

import { useEffect, useState } from "react";
import {Car} from "./car";
import TicketList from "./TicketList";
import { useParams } from "next/navigation";
import api from "@/http/api";
import Timer from "@/components/Timer/Timer";
import Loading from "@/components/Loading/Loading";
import style from './Detail.module.scss'

export const Detail = () => {
    const [loading, setLoading] = useState(true)
    const [tickets, setTickets] = useState<any>([])
    const [data, setData] = useState<any>([])
    const param = useParams()

    useEffect(()=>{
        api(`cars`).then((res:any)=> {
            res?.map((item:any) => {
                if(
                    item?._id == param.id
                ) {
                    setData(item)
                }
            })
        }).finally(()=>{
            setLoading(false)
        })
    },[tickets])

    return (
        <div className={style.detail}>
            {loading && <Loading />}
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Car data={data} setTickets={setTickets} setLoading={setLoading}/>
                    </div>
                    <div className="col-3">
                        <TicketList data={data} setTickets={setTickets} tickets={tickets} setLoading={setLoading}/>
                    </div>
                </div>
            </div>
        </div>
    )
}