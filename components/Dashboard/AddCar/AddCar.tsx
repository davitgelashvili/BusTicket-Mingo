"use client"

import InputText from "@/components/UI/InputText/InputText"
import axios from "axios"
import { useEffect, useState } from "react"

const AddCar = () => {
    const [inputValue, setInputValue] = useState({
        plate: 'da-100-to',
        driver_name: 'test name',
        direction_from: 'tbilisi',
        direction_to: 'batumi',
        date: '',
        getDate: '',
        getTime: '',
        seat_count: 8,
    })
    // const nowDate  = `${useDateFormat(inputValue.date).getDate()}-${useDateFormat(inputValue.date).getMonth()}-${useDateFormat(inputValue.date).getYear()} ${useDateFormat(inputValue.date).getHours()}:${useDateFormat(inputValue.date).getMinutes()}`

    const inputList = [
        {
            id: 3411,
            title: 'მანქანის ნომერი',
            type: 'text',
            placeholder: 'მაგალითი',
            value: inputValue.plate,
            name: 'plate',
        },
        {
            id: 43021,
            title: 'მძღოლის სახელი',
            type: 'text',
            placeholder: 'მაგალითი',
            value: inputValue.driver_name,
            name: 'driver_name',
        },
        {
            id: 757453,
            title: 'ქალაქი-დან',
            type: 'text',
            placeholder: 'მაგალითი',
            value: inputValue.direction_from,
            name: 'direction_from',
        },
        {
            id: 2564757,
            title: 'ქალაქა-მდე',
            type: 'text',
            placeholder: 'მაგალითი',
            value: inputValue.direction_to,
            name: 'direction_to',
        },
        {
            id: 75842,
            title: 'დრო',
            type: 'date',
            placeholder: 'მაგალითი',
            value: inputValue.date,
            name: 'date',
        },
        {
            id: 267575,
            title: 'ადგილების რაოდენობა',
            type: 'text',
            placeholder: 'მაგალითი',
            value: inputValue.seat_count,
            name: 'seat_count',
        }
    ]

    const handleClick = async(e:any) => {
        e.preventDefault()
        await axios.post(`http://localhost:8000/cars`, inputValue)
        .finally(()=>{
            console.log('დაემატა')
        })
    }

    return (
        <form>
            <div style={{width: '400px'}}>
                {
                    inputList?.map((item:any)=>{
                        return (
                            <InputText key={item.id} props={item} inputValue={inputValue} setInputValue={setInputValue} />
                        )
                    })
                }
                <button
                    onClick={handleClick}
                    >
                    დამატება
                </button>
            </div>
        </form>
    )
}

export default AddCar