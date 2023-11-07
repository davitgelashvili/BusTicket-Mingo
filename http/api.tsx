import axios from "axios"

const url = 'https://mingo-back.vercel.app/'

const api = async (param: any) => {
    const res = await axios.get(url + param)
    return res?.data
}

export default api