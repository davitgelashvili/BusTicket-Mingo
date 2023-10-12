import { Header } from '@/components/Header/Header'
import {Destinations} from '../components/Destinations/Destinations'
import {Slider} from '../components/Slider/Slider'
import styles from './page.module.scss'

const page = () =>  {
    return (
        <>
        <Header />
        <main className={styles.main}>
            <Slider />
            <Destinations />
        </main>
        </>
    )
}

export default page