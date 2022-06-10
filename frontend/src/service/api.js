import axios from 'axios'


const rest = axios.create({ 
    baseURL: process.env.REACT_APP_API
})


async function check_auth() {
    return await rest.get("/auth", { withCredentials: true }).then(r => r.data.auth)
}

async function search(type, query) {
    return await rest.get("/" + type + "/search/" + query).then(r => r.data)
}

async function citizen_appointments(citizen_id) {
    return await rest.get("/appointment/citizen/" + citizen_id).then(r => r.data)
}

async function clinic_appointments(clinic_id) {
    return await rest.get("/appointment/clinic/" + clinic_id).then(r => r.data)
}

async function clinics() {
    return await rest.get("/clinic").then(r => r.data)
}

async function medicines() {
    return await rest.get("/medicine").then(r => r.data)
}


const Api = {
    check_auth,
    search,
    citizen_appointments,
    clinic_appointments,
    clinics,
    medicines
}

export default Api




