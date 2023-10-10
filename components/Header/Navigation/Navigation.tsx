import Link from 'next/link'
import styles from './Navigation.module.scss'
import Image from 'next/image'
import logo from '@/public/img/logo.svg'

const data = [
    {
        id:1,
        title: 'მთავარი',
        url: '/'
    },
    {
        id:2,
        title: 'ჩვენს შესახებ',
        url: '/'
    },
    {
        id:3,
        title: 'კონტაქტი',
        url: '/'
    }
]

export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className='container'>
                <div className='row'>
                    <div className='col-auto d-flex align-items-center'>
                        <div className={styles.logo}>
                            MING
                            <Image src={logo} alt={'icon'} width={20} height={20} />
                            .GE
                        </div>
                    </div>
                    <div className='col-8 d-flex align-items-center'>
                        <ul className={styles.list}>
                            {data && data.map( (item:any) => {
                                return (
                                    <li className={styles.item} key={item.id}>
                                        <Link 
                                            href={item.url}
                                            className={styles.link}
                                            >{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='col-2 d-flex justify-content-end align-items-center'>
                        <Link href={''} className={styles.login}>
                            შესვლა
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}