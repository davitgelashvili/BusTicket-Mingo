import Image from 'next/image'
import styles from './Cars.module.scss'

export const Item = ({item}: any) => {
    item && console.log(item)
    return (
        <div className={styles.item}>
            <figure className={styles.cover}>
                <Image src={item.img} width={0} height={0} alt='cover' />
            </figure>
            hi
        </div>
    )
}