import Image from 'next/image'
import styles from './Services.module.scss'

const Item = ({item}: any) => {
    return (
        <div className={styles.item}>
            <div className={styles.icon}>
                <Image src={item.icon} alt={'icon'} width={30} height={30} />
            </div>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
        </div>
    )
}

export default Item