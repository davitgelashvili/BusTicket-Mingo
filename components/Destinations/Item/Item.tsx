"use client"

import Link from 'next/link'
import styles from './Item.module.scss'

export const Item = ({item}: any) => {

    return (
        <div key={item.id} className={styles.item_list}>
            <div className="row">
                <div className="col-3">
                    <div className={styles.item}>
                        <h2>{item.direction_from}</h2>
                        <h3>{item.date}</h3>
                    </div>
                </div>
                <div className="col-1">
                    <div className={`${styles.item} d-flex align-items-center`}>
                        
                    </div>
                </div>
                <div className="col-3">
                    <div className={styles.item}>
                        <h2>{item.direction_to}</h2>
                    </div>
                </div>
                <div className="col-2">
                    <div className={styles.item}>
                        <li>ინტერნეტი</li>
                        <li>კონდიციონერი</li>
                        <li>კომფორტი</li>
                        <li>დამტენი</li>
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