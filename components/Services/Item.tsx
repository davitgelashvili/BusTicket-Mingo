import styles from './Services.module.scss'

const Item = ({item}: any) => {
    return (
        <div className={styles.item}>
            <div className={styles.icon} style={{backgroundImage: `url(${item.icon})`}}></div>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
        </div>
    )
}

export default Item