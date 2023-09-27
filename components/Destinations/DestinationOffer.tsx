import styles from './Destinations.module.scss'
import Link from 'next/link'

export const DestinationOffer = ({item}: any) => {
    const date = new Date()
    
    return (
        <Link 
            href={`destination?from=${item.fromValue}&to=${item.toValue}&date=${date.getDate()}`}
            className={styles.item}
            >
            <div className={styles.cover} style={{backgroundImage: `url(${item.img})`}}></div>
            <h1>{item.fromName}</h1>
            <h3>{item.toName}</h3>
        </Link>
    )
}