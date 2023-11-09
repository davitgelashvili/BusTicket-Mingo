"use client"

import i18n from "@/app/i18n/i18n"
import CustomSelect from "@/components/UI/CustomSelect/CustomSelect"
import icon from '@/public/img/arrow.svg'
import { siteTranslateAction } from "@/store/translate"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Translate = () => {
    const dispatch = useDispatch()
    const {language} = useSelector((state:any) => state.translate)

    const options = [
        {
            value: 'ka',
            label: 'ქართული'
        },
        {
            value: 'en',
            label: 'English'
        },
    ]
    
    useEffect(()=>{
        i18n.changeLanguage(language)
    }, [dispatch, language])

    return (
        <CustomSelect 
            icon={icon} 
            title={language === 'ka' ? 'ქართული' : 'English'} 
            options={options} 
            selected={''}
            onChange={(e: any) => {
                dispatch(siteTranslateAction.changeLanguage(e))
            }}
            />
    )
}

export default Translate