import * as React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import LockIcon from '@mui/icons-material/Lock'
import Navbar from '../components/Navbar'
import theme from '../components/Theme'


const StatusView = () => {
    return (
        <ThemeProvider theme = {theme}>
            <Navbar />
            <Grid
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="center"
                m="5%"
                gap={3}
            >
                <LockIcon color="secondary" sx={{ width: "12rem", height: "12rem"}} />
                <Typography textAlign="center" color="secondary" variant="h3" fontWeight="bold">
                    401: Access denied            
                </Typography>
                <hr style = {{ width: "40%" }} />
                <Typography textAlign="center" color="secondary" variant="h5">
                    Sie haben nicht die benötigten Berechtigungen, um diese Seite zu betreten. <br/>
                    Registrieren Sie sich auf der Hauptseite um die nötigen Berechtigungen zu erhalten.
                </Typography>
                <Button size="large" variant="contained" href="/">
                    Zurück zur Hauptseite
                </Button>
            </Grid>
        </ThemeProvider>
    )
}


export default StatusView;