"use client"

import { useEffect, useState } from 'react'
import styles from './Filter.module.scss'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { useRouter } from 'next/navigation'


const options = [
    { value: 'tbilisi', label: 'თბილისი' },
    { value: 'batumi', label: 'ბათუმი' },
    { value: 'poti', label: 'ფოთი' }
]

export const Filter = () => {
    const router = useRouter()

    const [data, setData] = useState({
        from: '',
        to: '',
        date: new Date()
    })


    return (
        <div className={styles.filter}>
            <div className='container'>
                <div className={styles.content}>
                    <div className='row'>
                        <div className='col-4'>
                            <p>საიდან</p>
                            <Select  
                                id='1'
                                options={options} 
                                onChange={(e: any) => {
                                    setData({
                                        ...data,
                                        from: e.value,
                                    })
                                }}  />
                        </div>
                        <div className='col-4'>
                            <p>სად</p>
                            <Select 
                                id='2'
                                options={options} 
                                onChange={(e: any) => {
                                    setData({
                                        ...data,
                                        to: e.value,
                                    })
                                }}  />
                        </div>
                        <div className='col-3'>
                            <p>თარიღი</p>
                            <DatePicker
                                selected={data.date}
                                onChange={(date:any) => setData({
                                        ...data,
                                        date: date,
                                    })
                                }
                                minDate={new Date()}
                            />
                        </div>
                        <div className='col-1'>
                            <button
                                onClick={() => {
                                    router.push(`destination?from=${data.from}&to=${data.to}&date=${data.date}`)
                                }}
                                >
                                    ძებნა
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}