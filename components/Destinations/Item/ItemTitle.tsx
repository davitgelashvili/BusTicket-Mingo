"use client"

import useCityTitle from '@/hooks/useCityTitle'
import styles from './Item.module.scss'

const ItemTitle = ({title}: any) => {

    return (
        <h2 className={styles.title}>{useCityTitle(title)}</h2>
    )
}

export default ItemTitle