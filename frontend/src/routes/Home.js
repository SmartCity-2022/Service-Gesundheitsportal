import * as React from 'react'
import { Grid, Typography  } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import Navbar from '../components/Navbar'
import theme from '../components/Theme'
import HospitalCard from '../components/HospitalCard'


const HomeView = () => {
    return (
        <ThemeProvider theme = {theme}>
            <Navbar />
            <Grid display="flex" flexDirection="column" m="5%" gap={8}>
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
                <Grid display="flex" sx={{justifyContent: "space-around"}}>
                    <HospitalCard 
                        img={"https://www.dewezet.de/cms_media/module_img/12738/6369499_2_articledetail_270-0900-75862-lknovo-jpg.jpg"}
                        title="Krankenhaus Elizabeth"
                        founded="Gründung 2018"
                        adress="Holzweg. 17"
                        employees="689 Mitarbeiter"
                        beds="290 Betten"
                    />
                    <HospitalCard 
                        img={"https://upload.wikimedia.org/wikipedia/commons/b/bb/Bielefeld_Klinikum_Mitte.jpg"}
                        title="Krankenhaus Königwelt"
                        founded="Gründung 2020"
                        adress="Siebweg. 129"
                        employees="346 Mitarbeiter"
                        beds="457 Betten"
                    />
                    <HospitalCard 
                        img={"https://ip.disko.io/resize?width=1600&url=https%3A%2F%2Fdownloads.elisabeth-vinzenz.de%2Fevv%2FHausbild_FKH_Web_9b9082dbb2.jpg"}
                        title="Krankenhaus Weser"
                        founded="Gründung 2014"
                        adress="Ringstraße. 20"
                        employees="545 Mitarbeiter"
                        beds="124 Betten"
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}


export default HomeView;