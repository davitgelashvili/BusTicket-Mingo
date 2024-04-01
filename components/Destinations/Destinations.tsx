"use client"

import styles from './Destinations.module.scss'
import {DestinationOffer} from './DestinationOffer'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { useTranslation } from 'react-i18next'

export const Destinations = () => {
    const {t} = useTranslation()
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


    return (
        <>
        <div className={styles.destinations}>
            <div className='container'>
                <SectionTitle title={t('locationDestination.header')} />
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
        </>
    )
}