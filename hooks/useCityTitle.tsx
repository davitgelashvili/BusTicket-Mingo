"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const useCityTitle = (title:any) => {
    const [myTitle, setMyTitle] = useState('')
    const {t} = useTranslation()

    useEffect(()=>{
        switch (title) {
            case 'tbilisi':
                setMyTitle('city.tbilisi')
                break;
            case 'batumi':
                setMyTitle('city.batumi')
                break;
            case 'kutaisi':
                setMyTitle('city.kutaisi')
                break;
            case 'poti':
                setMyTitle('city.poti')
                break;
            default:
                setMyTitle(title)
                break;
        }
    }, [title])

    return t(myTitle)
}


export default useCityTitle