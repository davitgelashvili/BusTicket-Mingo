"use client"

import { useEffect } from "react"
import DatePicker from "react-datepicker"
import CustomCalendar from "../CustomCalendar/CustomCalendar"

const InputText = ({props, setInputValue, inputValue}:any) => {
        if(props?.type === 'date') {
            return (
                <CustomCalendar
                    // icon={'dateIcon'} 
                    title={'თარიღი'} 
                    value={`${props?.value}`}
                    >
                    <DatePicker
                        className={'filter-calendar'}
                        selected={props?.value}
                        inline={true}
                        minDate={new Date()}
                        showTimeSelect
                        onChange={(date:any) => {
                            setInputValue( {...inputValue, [props.name]: date} );
                        }}
                        />
                </CustomCalendar>
            )
        } else {
            return (
                <label style={{width: '100%', marginBottom: '15px'}}>
                    <p style={{margin: 0}}>
                    {props?.title}
                    </p>
                    <input
                        type={props?.type}
                        placeholder={props?.placeholder}
                        value={props?.value}
                        onChange={(e:any) => {
                            setInputValue( {...inputValue, [props.name]: e.target.value} );
                        }}
                        />
                </label>
            )
        }
}

export default InputText