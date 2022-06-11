import * as React from 'react'
import { Grid, Typography  } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './Theme'


const Body = (props) => {
    return (
        <ThemeProvider theme = {theme}>
            <Grid display="flex" flexDirection="column" m="5%" gap={8}>
                <Typography color="secondary" textAlign="center" variant="h4" fontWeight="bold"> 
                    { props.title }
                </Typography>
                { props.content }
            </Grid>
        </ThemeProvider>
    )
}


export default Body;