"use client"

import styles from './Destinations.module.scss'
import {DestinationOffer} from './DestinationOffer'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { useEffect, useState } from 'react'

export const Destinations = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const localData = [
        {
            id: 13468,
            fromName: 'თბილისი',
            toName: 'ბათუმი',
            fromValue: 'tbilisi',
            toValue: 'batumi',
            img: 'https://tkt.ge/static/images/batumi.jpg'
        },
        {
            id: 22547,
            fromName: 'ბათუმი',
            toName: 'თბილისი',
            fromValue: 'batumi',
            toValue: 'tbilisi',
            img: 'https://tkt.ge/static/images/tbilisi.jpg'
        },
        {
            id: 323464,
            fromName: 'თბილისი',
            toName: 'ქუთაისი',
            fromValue: 'tbilisi',
            toValue: 'poti',
            img: 'https://tkt.ge/static/images/foti.jpg'
        }
    ]

    const data = [
        {
            id: 15753,
            fromName: 'თბილისი',
            toName: 'ბათუმი',
            fromValue: 'tbilisi',
            toValue: 'batumi',
            img: 'https://tkt.ge/static/images/batumi.jpg'
        },
        {
            id: 24577,
            fromName: 'ბათუმი',
            toName: 'თბილისი',
            fromValue: 'batumi',
            toValue: 'tbilisi',
            img: 'https://tkt.ge/static/images/tbilisi.jpg'
        },
        {
            id: 53346,
            fromName: 'თბილისი',
            toName: 'ვლადიკავკაზი',
            fromValue: 'tbilisi',
            toValue: 'poti',
            img: 'https://tkt.ge/static/images/foti.jpg'
        },
        {
            id: 44378,
            fromName: 'თბილისი',
            toName: 'ფოთი',
            fromValue: 'tbilisi',
            toValue: 'poti',
            img: 'https://tkt.ge/static/images/foti.jpg'
        },
        {
            id: 55889,
            fromName: 'თბილისი',
            toName: 'ფოთი',
            fromValue: 'tbilisi',
            toValue: 'poti',
            img: 'https://tkt.ge/static/images/foti.jpg'
        }
    ]

    function getCurrentDimension(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
          setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
        
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    function pageCountLocal() {
        if(screenSize.width >= 1200){
            return 3
        }else if (screenSize.width < 1200 && screenSize.width >= 768){
            return 2
        }else if (screenSize.width <= 767) {
            return 1
        }
    }

    function pageCountGlobal() {
        if(screenSize.width >= 1200){
            return 5
        }else if (screenSize.width < 1200 && screenSize.width >= 768){
            return 3
        }else if (screenSize.width <= 767) {
            return 2
        }
    }

    console.log(screenSize)

    return (
        <>
        <div className={styles.destinations}>
            <div className='container'>
                <SectionTitle title={'ადგილობრივი მიმართულებები'} />
                <div className={styles.list}>
                    <Swiper
                        slidesPerView={pageCountLocal()}
                        spaceBetween={25}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 4,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 5,
                              spaceBetween: 50,
                            },
                        }}
                        >
                        {
                            localData.map(item => {
                                return (
                                    <SwiperSlide>
                                        <DestinationOffer style={{height: '195px'}} key={item.id} item={item}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
        <div className={styles.destinations}>
            <div className='container'>
                <SectionTitle title={'სატურისტო მიმართულებები'} />
                <div className={styles.list}>
                    <Swiper
                        slidesPerView={pageCountGlobal()}
                        spaceBetween={25}
                        >
                        {
                            data.map(item => {
                                return (
                                    <SwiperSlide>
                                        <DestinationOffer style={{height: '325px'}} key={item.id} item={item}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
        </>
    )
}