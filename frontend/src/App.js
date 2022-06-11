import React from 'react'
import { Routes, Route } from "react-router-dom"
import AppointmentView from "./routes/Appointment"
import MedicineView from "./routes/Medicine"
import SearchView from "./routes/Search"
import ClinicView from "./routes/Clinic"
import OrderView from "./routes/Order"
import HomeView from "./routes/Home"
import Auth from "./service/Auth"


function App() {
    return (
        <Routes>
            <Route path = "/" element = {<HomeView />} />
            <Route path = "/kliniken" element = {<ClinicView />} />
            <Route path = "/medikamente" element = {<MedicineView />} />
            <Route path = "/bestellungen" element = {<Auth page = {<OrderView />} />} />
            <Route path = "/termine" element = {<Auth page = {<AppointmentView />} />} />
            <Route path = "/suche" element = {<SearchView />} />
        </Routes>
    )
}


export default App
