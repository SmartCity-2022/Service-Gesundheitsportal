import * as React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import AppointmentCitizen from '../components/AppointmentCitizen'


const AppointmentView = () => {
    return (
        <>
            <Navbar />
            <Body 
                title="Termine"
                conten={<AppointmentCitizen />}
            />
        </>
    )
}


export default AppointmentView;