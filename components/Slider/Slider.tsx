import { Filter } from '../Filter/Filter'
import styles from './Slider.module.scss'
import cover from '@/public/img/Mastercard.png'

export const Slider = () => {
    return (
        <div className={styles.slider}>
            <div className='container'>
                <h1 className={styles.title}>შეიძინე მინივენის</h1>
                <h1 className={styles.title}>ბილეთი ონლაინ</h1>
            </div>
            <Filter />
        </div>
    )
}