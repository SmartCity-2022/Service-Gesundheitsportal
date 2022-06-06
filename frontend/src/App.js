import React from 'react'
import { Routes, Route } from "react-router-dom"
import MedikamentView from "./routes/MedikamentView"
import BestellungView from "./routes/BestellungView"
import SearchView from "./routes/SearchView"
import TerminView from "./routes/TerminView"
import KlinikView from "./routes/KlinikView"
import HomeView from "./routes/HomeView"


function App() {
    return (
        <Routes>
            <Route path = "/" element = {<HomeView />} />
            <Route path = "/kliniken" element = {<KlinikView />} />
            <Route path = "/medikamente" element = {<MedikamentView />} />
            <Route path = "/bestellungen" element = {<BestellungView />} />
            <Route path = "/termine" element = {<TerminView />} />
            <Route path = "/suche" element = {<SearchView />} />
        </Routes>
    )
}


export default App
