"use client"

import Image from 'next/image'
import { Filter } from '../Filter/Filter'
import styles from './Slider.module.scss'
import { useTranslation } from 'react-i18next'

export const Slider = () => {
    const {t} = useTranslation()
    return (
        <div className={styles.slider}>
            <div className={styles.body}>
                <h1 className={styles.title}>
                    {t('slider.title')}
                </h1>
                <Filter />
            </div>
        </div>
    )
}