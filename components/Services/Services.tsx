import Item from './Item'
import styles from './Services.module.scss'

const data = [
    {
        id: 1,
        title: 'კონდიციონერი',
        desc: 'ზამთარ - ზაფხულის კონდიციონერი',
        icon: 'img/services/thermostat.svg',
    },
    {
        id: 2,
        title: 'დამტენი',
        desc: 'ტექნიკის დამუხტვი შესაძლებლობა',
        icon: 'img/services/battery.svg',
    },
    {
        id: 3,
        title: 'ინტერნეტი',
        desc: 'უფასო ვაიფაი ინტერნეტი',
        icon: 'img/services/wifi.svg',
    },
    {
        id: 4,
        title: 'კომფორტი',
        desc: 'უსაფრთხო და კომფორტული',
        icon: 'img/services/comfort.svg',
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