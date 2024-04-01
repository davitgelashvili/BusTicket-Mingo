"use client"

import Link from 'next/link'
import styles from './Navigation.module.scss'
import Image from 'next/image'
import logo from '@/public/img/logo.svg'
import { useTranslation } from 'react-i18next'
import Translate from '../Translate/Translate'


export const Navigation = () => {
    const {t} = useTranslation()
    const data = [
        {
            id:3532,
            title: t('menu.home'),
            url: '/'
        }
    ]

    return (
        <div className={styles.navigation}>
            <div className='container'>
                <div className='row'>
                    <div className='col-auto d-flex align-items-center'>
                        <div className={styles.logo}>
                            MING
                            <Image src={logo} alt={'icon'} width={20} height={20} />
                            .GE
                        </div>
                    </div>
                    <div className='col-6 d-flex align-items-center'>
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
                    </div>
                    <div className='col-12 col-lg-4 d-flex justify-content-end'>
                        <Translate />
                    </div>
                </div>
            </div>
        </div>
    )
}