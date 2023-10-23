"use client"

import { useEffect, useState } from "react"
import styles from "./CustomSelect.module.scss"
import Image from "next/image"
import { useTranslation } from "react-i18next"

const CustomSelect = ({options, title, icon, onChange}:any) => {
    const {t} = useTranslation()
    const [dropdown, setDropdown] = useState(false)
    const [selected, setSelected] = useState(t('filter.placeholder'))

    function handleOptionClick(e:any){
        setDropdown(false)
        setSelected(e.target.getAttribute("data-name"))
        onChange(e.target.getAttribute("data-value"))
    };

    const handleClickOutside = (e:any) => {
        if (
            !e.target.classList.contains(styles.item) &&
            !e.target.classList.contains(styles.selected)
        ) {
            setDropdown(false)
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
                            {selected}
                        </span>
                </p>
            </div>
            {
            dropdown && (
                <div className={styles.body}>
                {
                    options?.map((item:any)=>{
                        return (
                            <li 
                                className={styles.item}
                                key={item.value} 
                                data-value={item.value}
                                data-name={item.label}
                                onClick={handleOptionClick}
                                    >
                                    {item.label}
                                </li>
                        )
                    })
                }
                </div>
            )
            }
        </div>
    )
}

export default CustomSelect