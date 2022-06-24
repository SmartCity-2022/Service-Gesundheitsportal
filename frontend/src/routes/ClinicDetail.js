import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import AppointmentClinic from '../components/AppointmentClinic'
import Navbar from '../components/Navbar'
import theme from '../components/Theme'
import api from '../service/Api'
import moment from 'moment'


const ClinicDetailView = () => {

    const { id } = useParams()
    const [clinic, setClinic] = React.useState([])
    const [appointments, setAppointments] = React.useState([])

    React.useEffect(() => { fetch_detail() }, [])
    const handleChange = () => { fetch_detail() }

    const fetch_detail = async () => {
        setClinic(await api.clinic(id))
        setAppointments(await api.clinic_appointments(id))
    }

    const RenderContent = () => {
        if (appointments.length > 0) {
            return <AppointmentClinic data={appointments} callback={handleChange}/>
        } else {
            return (
                <Typography color="secondary" variant="h4" fontWeight="400" > 
                    Keine Termine vorhanden
                </Typography>
            )
        }
    }

    return (
    <>
        <Navbar />
        <ThemeProvider theme = {theme}>
            <Grid display="flex" flexDirection="column" my="5%" mx="10%" gap={10}>
                <Grid display="flex" flexDirection="column" gap={5}>
                    <Typography color="secondary" variant="h3" fontWeight="bold" > 
                        {clinic.title} 
                    </Typography>
                    <Typography color="secondary" variant="h5"> 
                        {clinic.street} {clinic.house_number}
                    </Typography>
                    <Typography color="secondary" variant="h5">
                        Tel: {clinic.phone_number}
                    </Typography>
                    <Typography color="secondary" variant="h5">
                        Öffnungszeit: { moment(clinic.opening_time).locale("de").format("LT") }
                    </Typography>
                    <Typography color="secondary" variant="h5">
                        Schließzeit: { moment(clinic.closing_time).locale("de").format("LT") }
                    </Typography>
                </Grid>
                <RenderContent />
            </Grid>
        </ThemeProvider>
    </>
    )
}


export default ClinicDetailView;