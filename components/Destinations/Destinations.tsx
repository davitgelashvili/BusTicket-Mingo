"use client"

import styles from './Destinations.module.scss'
import {DestinationOffer} from './DestinationOffer'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

export const Destinations = () => {
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

    return (
        <>
        <div className={styles.destinations}>
            <div className='container'>
                <SectionTitle title={'ადგილობრივი მიმართულებები'} />
                <div className={styles.list}>
                    <Swiper
                        spaceBetween={25}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        >
                        {
                            localData.map(item => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <DestinationOffer style={{height: '195px'}} item={item}/>
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
                        spaceBetween={25}
                        slidesPerView={2}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 5,
                            },
                        }}
                        >
                        {
                            data.map(item => {
                                return (
                                    <SwiperSlide key={item.id} >
                                        <DestinationOffer style={{height: '325px'}} item={item}/>
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