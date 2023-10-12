"use client"

const useDateFormat = (date:any) => {
    let itemDate = new Date(date)

    const dateFormat = {
        getMonth: () => {
            let month = itemDate.getMonth() + 1
            return month < 10 ? '0' + month : month
        },
        getDate: () => {
            let date = itemDate.getDate()
            return date < 10 ? '0' + date : date
        },
        getHours: () => {
            let horse = itemDate.getHours()
            return horse < 10 ? '0' + horse : horse
        },
        getMinutes: () => {
            let minutes = itemDate.getMinutes()
            return minutes < 10 ? '0' + minutes : minutes
        }
    } 

    return dateFormat
}


export default useDateFormat