import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';

function App() {

    const [user, setUser] = useState([]);

    useEffect(() => { fetchUser() }, [])

    const id = 1;

    const fetchUser = () => {
        axios.get(process.env.REACT_APP_API + "clinic/" + id).then(response => setUser(response.data))
    }

    return (
    <>
        <Navbar />
        <header className="w-10 h-10 bg-slate-600">
            <>
                <code> ID:         { user.clinic_id } </code>
                <code> Straße:     { user.street } </code>
                <code> Hausnummer: { user.opening_time } </code>
            </>
        </header>    
    </>
    );
}

export default App;
