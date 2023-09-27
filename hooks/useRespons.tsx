"use client"

import api from "@/http/api"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const useRespons = (name:any) => {
    const [data, setData] = useState<any>([])
    const param = useParams()
    const searchParamsFrom = useSearchParams().get('from');
    const searchParamsTo = useSearchParams().get('to');
    const searchParamsDate = useSearchParams().get('date');

    useEffect(()=>{
        api(name).then((res:any)=> {
            res?.map((item:any) => {
                setData(item)
                // if(
                //     item?.id == param.id
                // ) {
                // }
            })
        })
    },[searchParamsFrom, searchParamsTo, searchParamsDate])

    return data
}


export default useRespons