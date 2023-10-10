"use client"

import styles from './Detail.module.scss'
import axios from 'axios'
import wheel from '@/public/img/wheel.svg'
import Image from 'next/image'

function icon(color:any){
    return (
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  fill={color} d="M15.4395 11.5761C15.4395 9.0488 17.4883 7 20.0156 7H39.0827C41.6101 7 43.6589 9.0488 43.6589 11.5761V39.7955H15.4395V11.5761Z"/>
            <path d="M4 11.1948C4 8.87806 5.87806 7 8.19478 7V7C10.5115 7 12.3896 8.87807 12.3896 11.1948V39.7955H4V11.1948Z" fill="black"/>
            <path d="M41.2186 42.7418C43.7172 42.3932 45.9473 44.3337 45.9473 46.8565V46.8565C45.9473 48.9292 44.4196 50.6847 42.3669 50.9712L31.8156 52.4434C30.3122 52.6532 28.7869 52.6532 27.2834 52.4434L16.7321 50.9712C14.6794 50.6847 13.1517 48.9291 13.1517 46.8565V46.8565C13.1517 44.3337 15.3818 42.3932 17.8804 42.7418L27.7741 44.1224C28.952 44.2867 30.147 44.2867 31.3249 44.1224L41.2186 42.7418Z" fill="black"/>
            <path d="M46.709 11.1948C46.709 8.87806 48.587 7 50.9038 7V7C53.2205 7 55.0985 8.87807 55.0985 11.1948V39.7955H46.709V11.1948Z" fill="black"/>
        </svg>
    )
}

export const Car = ({data, setTickets, setLoading}: any) => { 
    const handlClick = async(item:any, e:any) => {
        if(!item.reserved){
            await axios.patch(`http://localhost:8000/cars/reserve-seat?car_id=${data._id}&seat_id=${item.seat_id}`)
            .then(()=>{
                setTickets((perv:any)=> [...perv, item])
            })
            .finally(()=>{
                setLoading(true)
            })
        }
    }

    return (
        data && data.seats && (
            <div className={styles.car}>
                <div className='row'>
                    <div className='col-4' key={0} >
                        <div 
                            style={{backgroundColor: 'unset'}}
                            className={styles.seat}
                            >
                                <Image src={wheel} alt={'icon'} width={60} height={60} />
                        </div>
                    </div>
                    {data?.seats.map((item:any, key:any) => {
                        return (
                            <div className='col-4' key={item.seat_id} >
                                <div 
                                    place-id={item.placeId}
                                    place-status={item.isFree ? 'true' : 'false'}
                                    className={`${styles.seat} ${!item.reserved ? styles.available : styles.disable} ${item.selected && styles.chose}`}
                                    onClick={ (e:any) => handlClick(item, e)}
                                >
                                    {icon(!item.reserved ? 'green' : '#cecece')}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    )
}