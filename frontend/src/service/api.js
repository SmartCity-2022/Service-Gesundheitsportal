import axios from 'axios'


const rest = axios.create({ 
    baseURL: process.env.REACT_APP_API,
    withCredentials: true
})


async function check_auth() {
    return await rest.get("/auth").then(r => r.data.auth)
}

async function search(type, query) {
    return await rest.get("/" + type + "/search/" + query).then(r => r.data)
}

async function clinics() {
    return await rest.get("/clinic").then(r => r.data)
}

async function medicines() {
    return await rest.get("/medicine").then(r => r.data)
}

async function citizen_appointments() {
    return await rest.get("/appointment/citizen").then(r => r.data)
}

async function clinic_appointments(clinic_id) {
    return await rest.get("/appointment/clinic/" + clinic_id).then(r => r.data)
}


const api = {
    check_auth,
    search,
    clinics,
    medicines,
    citizen_appointments,
    clinic_appointments
}

export default api




