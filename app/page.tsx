import { Header } from '@/components/Header/Header'
import {Destinations} from '../components/Destinations/Destinations'
import {Slider} from '../components/Slider/Slider'
import styles from './page.module.scss'
import { Cars } from '@/components/Cars/Cars'

const page = () =>  {
    return (
        <>
        <Header />
        <main className={styles.main}>
            <Slider />
            <Destinations />
            <Cars />
        </main>
        </>
    )
}

export default page