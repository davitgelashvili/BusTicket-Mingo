import styles from './Loading.module.scss'

const Loading = () => {
    return (
        <div className={styles.load}>
            <span className={styles.loader}></span>
        </div>
    )
}

export default Loading