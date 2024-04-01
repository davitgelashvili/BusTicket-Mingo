"use client"

import styles from './Cars.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Item } from './Item'
import minivenCover from './../../public/img/cars/miniven.png'
import busCover from '@/public/img/cars/bus.png'
import sedanCover from '@/public/img/cars/sedan.png'
import { useTranslation } from 'react-i18next'

export const Cars = () => {
    const {t} = useTranslation()
    const data = [
        {
            id: 1,
            fromName: 'თბილისი',
            toName: 'ბათუმი',
            fromValue: 'tbilisi',
            toValue: 'batumi',
            img: minivenCover,
        },
        {
            id: 2,
            fromName: 'ბათუმი',
            toName: 'თბილისი',
            fromValue: 'batumi',
            toValue: 'tbilisi',
            img: sedanCover
        },
        {
            id: 3,
            fromName: 'თბილისი',
            toName: 'ვლადიკავკაზი',
            fromValue: 'tbilisi',
            toValue: 'poti',
            img: busCover
        }
    ]

    return (
        <div className={styles.cars}>
            <div className='container'>
                <SectionTitle title={t('cars.header')} />
                <div className={`${styles.list} row`}>
                    {
                        data.map(item => {
                            return (
                                <Item key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}