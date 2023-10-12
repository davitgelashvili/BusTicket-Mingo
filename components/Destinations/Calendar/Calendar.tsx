"use client"

import { useState } from "react"
import DatePicker from "react-datepicker"

const Calendar = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <DatePicker
                selected={date}
                inline={true}
                minDate={new Date()}
                calendarStartDay={1}
                onChange={(date:any) => setDate(date)}
            />
        </div>
    )
}

export default Calendar