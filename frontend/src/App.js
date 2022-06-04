import { Routes, Route } from "react-router-dom";
import React from 'react'
import SearchView from "./routes/SearchView";
import HomeView from "./routes/HomeView";


function App() {
    return (
        <Routes>
            <Route path = "/" element = {<HomeView />} />
            <Route path = "/suche" element = {<SearchView />} />
        </Routes>
    )
}


export default App
