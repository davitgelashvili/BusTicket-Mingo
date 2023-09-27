import styles from './Header.module.scss'
import {Navigation} from './Navigation/Navigation'
import {TopMenu} from './TopMenu/TopMenu'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Navigation />
        </header>
    )
}