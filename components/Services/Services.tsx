"use client"

import Item from './Item'
import styles from './Services.module.scss'
import thermostat from '@/public/img/services/new/condition.svg'
import battery from '@/public/img/services/new/charger.svg'
import wifi from '@/public/img/services/new/wifi.svg'
import comfort from '@/public/img/services/new/comfort.svg'
import { useTranslation } from 'react-i18next'


const Services = () => {
    const {t} = useTranslation()
    const data = [
        {
            id: 1,
            title: t('climat.title'),
            desc: t('climat.desc'),
            icon: thermostat
        },
        {
            id: 2,
            title: t('charger.title'),
            desc: t('charger.desc'),
            icon: battery
        },
        {
            id: 3,
            title: t('internet.title'),
            desc: t('internet.desc'),
            icon: wifi
        },
        {
            id: 4,
            title: t('comfort.title'),
            desc: t('comfort.desc'),
            icon: comfort
        }
    ]
    return (
        <div className={styles.services}>
            <div className='container'>
                <div className="row">
                    {
                        data?.map( (item:any) => {
                            return (
                                <div className="col-12 col-lg-3 d-flex justify-content-center" key={item.id} >
                                    <Item item={item}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services