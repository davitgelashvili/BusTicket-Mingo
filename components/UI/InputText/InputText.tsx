"use client"

import { useEffect } from "react"

const InputText = ({props, setInputValue, inputValue}:any) => {
    return (
        <label>
            <p>
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

export default InputText