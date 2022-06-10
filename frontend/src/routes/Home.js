import * as React from 'react'
import Navbar from '../components/Navbar'
import { Grid, Typography  } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../components/Theme'


const HomeView = () => {
    return (
        <ThemeProvider theme = {theme}>
            <Navbar />
            <Grid display="flex" flexDirection="column" m="5%" gap={5}>
                <Typography color="secondary" textAlign="center" variant="h4" fontWeight="bold"> 
                    Willkommen auf dem Gesundheitsportal
                </Typography>
                <Typography color="secondary" textAlign="center" variant="h5">
                    Der Microservice Gesundheitsportal befasst sich mit der Digitalisierung 
                    von der Gesundheitsinfrastruktur der Stadt SmartCity. Die Bürger haben 
                    die Möglichkeit alle Klinken in SmartCity einzusehen und die zugehörigen Termine
                    zu belegen. Des weiteren können Bürger alle verfügbaren Medikamente einsehen
                    und diese direkt zu ihrer Addresse bestellen und liefern lassen.
                </Typography>
                <hr style = {{ margin: "0 5%" }} />
            </Grid>
        </ThemeProvider>
    )
}


export default HomeView;