import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';


function App() {

    const [user, setUser] = useState([]);

    useEffect(() => { fetchUser() }, [])

    const fetchUser = () => {
        axios.get(process.env.REACT_APP_API + "/clinic", {
            withCredentials: true
        }).then(response => setUser(response.data))
    }

    return (
    <>
        <Navbar />
        <header>
            <code> ID:         { user.clinic_id } </code>
            <code> Straße:     { user.street } </code>
            <code> Hausnummer: { user.opening_time } </code>
        </header>    
    </>
    );
}


export default App;
