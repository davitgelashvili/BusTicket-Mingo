import { url } from 'inspector'
import styles from './Header.module.scss'
import {Filter} from '../../Filter/Filter'

export const Header = () => {

    return (
        <div 
            className={styles.destination_header}
            style={{backgroundImage: `url(https://static.tre.ge/files/059e725a-232a-41e9-ab41-447d075b66a4Batumi-image.png)`}}
            >
            <Filter />
        </div>
    )
}