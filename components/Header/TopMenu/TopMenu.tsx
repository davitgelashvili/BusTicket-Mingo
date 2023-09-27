"use client"

import Link from 'next/link'
import styles from './TopMenu.module.scss'

const data = [
    {
        id:1,
        title: 'მძღოლებისთვის',
        url: '/'
    },
    {
        id:2,
        title: 'პირობები',
        url: '/'
    }
]

export const TopMenu = () => {
    return (
        <div className={styles.topmenu}>
            <div className='container d-flex justify-content-between align-items-center'>
                <ul className={styles.list}>
                    {data && data.map( (item:any) => {
                        return (
                            <li className={styles.item} key={item.id}>
                                <Link 
                                    href={item.url}
                                    className={styles.link}
                                    >{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <Link 
                    href={''}
                    className={styles.contact}
                    >591 111 996</Link>
            </div>
        </div>
    )
}