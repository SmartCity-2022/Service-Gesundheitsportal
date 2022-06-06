import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export default {

    search: async (type, query) => {
        const response = await api.get("/" + type + "/search/" + query)
        return response.data
    }
    
}



