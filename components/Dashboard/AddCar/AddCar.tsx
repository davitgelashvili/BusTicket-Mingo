"use client"

import InputText from "@/components/UI/InputText/InputText"
import axios from "axios"
import { useEffect, useState } from "react"

const AddCar = () => {
    const [inputValue, setInputValue] = useState({
        plate: '',
        driver_name: '',
        direction_from: '',
        direction_to: '',
        date: '',
        seat_count: 8,
    })

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
        await axios.post(`https://destination-nu.vercel.app/cars`, inputValue)
        .finally(()=>{
            console.log(inputValue)
        })
    }

    // const [date, setDate] = useState(new Date())

    // useEffect(()=>{
    //     console.log(date)
    // }, [date])

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