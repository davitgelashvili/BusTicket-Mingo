import styles from './SectionTitle.module.scss'
const SectionTitle = ({title}: any) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}

export default SectionTitle