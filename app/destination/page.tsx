"use client"

import {Header as Slider} from "../../components/Destinations/Header/Header"
import {Lists} from "../../components/Destinations/List/Lists"
import { Header } from "@/components/Header/Header"
import Calendar from "@/components/Destinations/Calendar/Calendar"

const page = () => {

    return (
        <>
            <Header />
            <Slider />
            <div className="container">
                <div className="row">
                    <div style={{flex: 1}}>
                        <Lists />
                    </div>
                    <div className="col-auto">
                        <Calendar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page