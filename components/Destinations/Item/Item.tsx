"use client"

import Link from 'next/link'
import styles from './Item.module.scss'
import arrowicon from '@/public/img/arrow.svg'
import caricon from '@/public/img/car.svg'
import Image from 'next/image'
import ItemDate from './ItemDate'
import ItemTitle from './ItemTitle'
import useDateFormat from '@/hooks/useDateFormat'

export const Item = ({item}: any) => {

    return (
        <div key={item.id} className={styles.item_list}>
            <div className="row">
                <div className="col-3">
                    <div className={styles.item}>
                        <ItemTitle title={item.direction_from}/>
                        <ItemDate item={item}/>
                    </div>
                </div>
                <div className="col-1">
                    <div className={`${styles.item} d-flex align-items-start`}>
                        <Image src={arrowicon} alt='icon' width={0} height={0} />
                    </div>
                </div>
                <div className="col-3">
                    <div className={styles.item}>
                        <ItemTitle title={item.direction_to}/>
                    </div>
                </div>
                <div className="col-3">
                    <div className={styles.item}>
                        <Link href={`/detail/${item._id}`}>ნახვა</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}