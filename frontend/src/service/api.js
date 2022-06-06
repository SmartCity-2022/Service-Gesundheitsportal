import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

async function search(type, query) {
    return await api.get("/" + type + "/search/" + query).then(r => r.data)
}
    

export default search


