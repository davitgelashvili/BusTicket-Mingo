import Link from 'next/link'
import styles from './Navigation.module.scss'

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
                    <div className='col-1'>
                        <div className={styles.logo}>
                            LOGO
                        </div>
                    </div>
                    <div className='col-10 d-flex align-items-center'>
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
                    <div className='col-1'>
                        <Link href={''} className={styles.login}>
                            შესვლა
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}