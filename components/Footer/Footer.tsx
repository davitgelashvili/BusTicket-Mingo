import Services from '../Services/Services'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Services />
        </footer>
    )
}

export default Footer