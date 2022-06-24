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

async function citizen_orders() {
    return await rest.get("/order/citizen").then(r => r.data)
}

async function clinic(clinic_id) {
    return await rest.get("/clinic/" + clinic_id).then(r => r.data)
}

async function clinic_appointments(clinic_id) {
    return await rest.get("/appointment/clinic/" + clinic_id).then(r => r.data)
}

async function add_appointment(clinic_id) {
    return await rest.put("/appointment/" + clinic_id)
}

async function delete_appointment(clinic_id) {
    return await rest.delete("/appointment/" + clinic_id)
}

async function create_order(items) {
    await rest.post("/order/", {
        "order_date": new Date,
        "medicines": items
    })
}

async function order(order_id) {
    return await rest.get("/order/citizen/" + order_id).then(r => r.data);
}


const api = {
    check_auth,
    search,
    clinics,
    medicines,
    clinic,
    citizen_appointments,
    citizen_orders,
    clinic_appointments,
    add_appointment,
    delete_appointment,
    create_order,
    order
}

export default api