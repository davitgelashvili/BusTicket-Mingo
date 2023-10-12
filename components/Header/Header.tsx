import styles from './Header.module.scss'
import {Navigation} from './Navigation/Navigation'

export const Header = ({style}:any) => {
    return (
        <header className={styles.header} style={style}>
            <Navigation />
        </header>
    )
}