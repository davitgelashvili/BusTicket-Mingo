"use client"

import { useEffect, useState } from "react";
import {Car} from "./car";
import useRespons from "@/hooks/useRespons";
import TicketList from "./TicketList";
import { useParams, useSearchParams } from "next/navigation";
import api from "@/http/api";

export const Detail = () => {
    const [data, setData] = useState<any>([])
    const param = useParams()
    const searchParamsFrom = useSearchParams().get('from');
    const searchParamsTo = useSearchParams().get('to');
    const searchParamsDate = useSearchParams().get('date');

    useEffect(()=>{
        api(`cars`).then((res:any)=> {
            res?.map((item:any) => {
                if(
                    item?._id == param.id
                    ) {
                        setData(item)
                }
            })
        })
    },[searchParamsFrom, searchParamsTo, searchParamsDate])

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Car data={data}/>
                </div>
                <div className="col-3">
                    <TicketList/>
                </div>
            </div>
            
        </div>
    )
}