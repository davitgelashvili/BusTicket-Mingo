import axios from "axios"

const url = 'http://localhost:8000/'

const api = async (param: any) => {
    const res = await axios.get(url + param)
    return res?.data
}

export default api