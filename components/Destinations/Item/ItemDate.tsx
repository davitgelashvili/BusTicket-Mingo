"use client"

import useDateFormat from '@/hooks/useDateFormat'
import styles from './Item.module.scss'

const ItemDate = ({item, time}: any) => {
    let itemDate = new Date(item.date)

    return (
        <h3 className={styles.date}>
            <p>{useDateFormat(item.date).getDate()} / {useDateFormat(item.date).getMonth()}</p>
            {/* <p>{useDateFormat(item.date).getHours()} : {useDateFormat(item.date).getMinutes()}</p> */}
            <p>{time}</p>
        </h3>
    )
}

export default ItemDate