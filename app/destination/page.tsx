import {Header} from "../../components/Destinations/Header/Header"
import {Lists} from "../../components/Destinations/List/Lists"
import {Navigation} from "../../components/Destinations/Navigation/Navigation"

const page = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Navigation />
                <Lists />
            </div>
        </>
    )
}

export default page