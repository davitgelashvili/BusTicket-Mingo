"use client"

import { useEffect, useState } from "react"
import styles from "./../CustomSelect/CustomSelect.module.scss"
import Image from "next/image"


const CustomCalendar = ({children, title, icon, value}:any) => {
    const [dropdown, setDropdown] = useState(false)
    const [selected, setSelected] = useState()

    const handleClickOutside = (e:any) => {
        if (
            e.target.classList.contains('react-datepicker__day')
        ) {
            console.log(1)
            setTimeout(() => {
                setDropdown(false)
            }, 100);
        }
    };

    const handleClickOpen = () => {
        setDropdown(!dropdown)
    }

    useEffect(()=>{
        document.addEventListener("mouseup", handleClickOutside);
    }, [dropdown, selected])


    return (
        <div className={styles.select}>
            <div className={styles.header}>
                <p 
                    className={styles.selected} 
                    onClick={handleClickOpen}
                    >
                        <Image src={icon} alt="icon" width={0} height={0} />
                        {title}:
                        <span>
                            {value}
                        </span>
                </p>
            </div>
            {
            dropdown && (
                <div className={styles.body}>
                    {children}
                </div>
            )
            }
        </div>
    )
}

export default CustomCalendar