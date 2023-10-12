"use client"

import DatePicker from "react-datepicker"
import {Header as Slider} from "../../components/Destinations/Header/Header"
import {Lists} from "../../components/Destinations/List/Lists"
import {Navigation} from "../../components/Destinations/Navigation/Navigation"
import { useState } from "react"
import { Header } from "@/components/Header/Header"

const page = () => {
    const [date, setDate] = useState(new Date())

    return (
        <>
            <Header />
            <Slider />
            <div className="container">
                <div className="row">
                    <div style={{flex: 1}}>
                        {/* <Navigation /> */}
                        <Lists />
                    </div>
                    <div className="col-auto">
                        <div>
                            <DatePicker
                                selected={date}
                                inline={true}
                                minDate={new Date()}
                                calendarStartDay={1}
                                onChange={(date:any) => setDate(date)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page