import { Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar'


function App() {
    return (
        <Routes>
            <Route path = "/nav" element = {<Navbar />} />
        </Routes>
    )
}


export default App
