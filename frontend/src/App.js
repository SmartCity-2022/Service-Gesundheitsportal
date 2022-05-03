import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {

    const [user, setUser] = useState([]);

    useEffect(() => { fetchUser() }, [])

    const fetchUser = () => {
        axios.get("http://localhost:8080/test").then(response => setUser(response.data))
    }

    return (
    <div className="App">
        <header className="App-header">
            { user.map((data) => {
                return (
                <>
                    <p><code> User-ID: { data.user_id } </code></p>
                    <p><code> User-Straße: { data.street } </code></p>
                    <p><code> User-Hausnummer: { data.house_number } </code></p>
                </>
                )
            })}
        </header>
    </div>
    );
}

export default App;
