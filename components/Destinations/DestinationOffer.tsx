import useDateFormat from '@/hooks/useDateFormat'
import styles from './Destinations.module.scss'
import Link from 'next/link'

export const DestinationOffer = ({item, style}: any) => {
    const date = new Date()
    
    return (
        <Link 
            href={`destination?from=${item.fromValue}&to=${item.toValue}&date=${useDateFormat(date).getDate()}-${useDateFormat(date).getMonth()}`}
            className={styles.item}
            >
            <div className={styles.cover} style={{backgroundImage: `url(${item.img})`, ...style}}></div>
            <h2 className={styles.from}>{item.fromName}</h2>
            <h1 className={styles.to}>{item.toName}</h1>
        </Link>
    )
}