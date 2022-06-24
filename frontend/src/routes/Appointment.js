import * as React from 'react'
import AppointmentCitizen from '../components/AppointmentCitizen'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import api from '../service/Api'


const AppointmentView = () => {

    const [data, setData] = React.useState([])
    React.useEffect(() => { fetch_appointment() }, [])
    const handleChange = () => { fetch_appointment() }

    const fetch_appointment = async () => {
        setData(await api.citizen_appointments())
    }

    return (
        <>
            <Navbar />
            <Body 
                title={ data.length === 0 ? "Keine Termine vorhanden" : "Termine" }
                content={ data.length > 0 ? <AppointmentCitizen data={data} callback={handleChange}/> : [] }
            />
        </>
    )
}


export default AppointmentView;