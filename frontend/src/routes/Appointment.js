import * as React from 'react'
import AppointmentCitizen from '../components/AppointmentCitizen'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import api from '../service/Api'


const AppointmentView = () => {

    const [data, setData] = React.useState([])
    React.useEffect(() => { fetch_appointment() })

    const fetch_appointment = async () => {
        setData(await api.citizen_appointments())
    }

    return (
        <>
            <Navbar />
            <Body 
                title="Termine"
                conten={<AppointmentCitizen data={data}/>}
            />
        </>
    )
}


export default AppointmentView;