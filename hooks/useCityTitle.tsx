"use client"

import { useEffect, useState } from "react"

const useCityTitle = (title:any) => {
    const [myTitle, setMyTitle] = useState('')

    useEffect(()=>{
        if(title === 'tbilisi') {
            setMyTitle('თბილისი')
        }

        if(title === 'batumi') {
            setMyTitle('ბათუმი')
        }

        if(title === 'kutaisi') {
            setMyTitle('ქუთაისი')
        }

        if(title === 'poti') {
            setMyTitle('ფოთი')
        }
    }, [title])

    return myTitle
}


export default useCityTitle