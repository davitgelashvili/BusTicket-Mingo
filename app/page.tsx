import {Destinations} from '../components/Destinations/Destinations'
import {Filter} from '../components/Filter/Filter'
import {Slider} from '../components/Slider/Slider'
import styles from './page.module.scss'

const page = () =>  {
    return (
        <main className={styles.main}>
            <Slider />
            <Destinations />
        </main>
    )
}

export default page