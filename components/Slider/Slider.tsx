import Image from 'next/image'
import { Filter } from '../Filter/Filter'
import styles from './Slider.module.scss'

export const Slider = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.body}>
                <h1 className={styles.title}>მინივენის ბილეთები ონლაინ</h1>
                <Filter />
            </div>
        </div>
    )
}