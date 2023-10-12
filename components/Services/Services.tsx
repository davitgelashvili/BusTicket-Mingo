import Item from './Item'
import styles from './Services.module.scss'
import thermostat from '@/public/img/services/new/condition.svg'
import battery from '@/public/img/services/new/charger.svg'
import wifi from '@/public/img/services/new/wifi.svg'
import comfort from '@/public/img/services/new/comfort.svg'

const data = [
    {
        id: 1,
        title: 'კონდიციონერი',
        desc: 'ზამთარ - ზაფხულის კონდიციონერი',
        icon: thermostat
    },
    {
        id: 2,
        title: 'დამტენი',
        desc: 'ტექნიკის დამუხტვის შესაძლებლობა',
        icon: battery
    },
    {
        id: 3,
        title: 'ინტერნეტი',
        desc: 'უფასო ვაიფაი ინტერნეტი',
        icon: wifi
    },
    {
        id: 4,
        title: 'კომფორტი',
        desc: 'უსაფრთხო და კომფორტული',
        icon: comfort
    }
]

const Services = () => {
    return (
        <div className={styles.services}>
            <div className='container'>
                <div className={styles.list}>
                    {
                        data?.map( (item:any) => {
                            return (
                                <Item key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services