import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import theme from './Theme'


const pages = ['Klinken','Medikamente','Bestellungen','Termine','Suche']
const links = {'Klinken':"/kliniken",'Medikamente':"/medikamente",'Bestellungen':"/bestellungen",'Termine':"/termine",'Suche':'/suche'}


const Navbar = () => {
    return (
    <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
        <Container maxWidth="xl">
        <Toolbar disableGutters>

            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 5,
                    display: 'flex',
                    fontWeight: 'bold',
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none'
                }}
            > Gesundheitsportal
            </Typography>
    
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                { pages.map(page => (
                    <Button 
                        key={page} 
                        sx={{ 
                            my: 2,
                            px: 2,
                            color: 'white', 
                            display: 'block'
                        }} 
                        href={links[page]}
                    > {page}
                    </Button>
                ))}
            </Box>
                        
        </Toolbar>
        </Container>
        </AppBar>
    </ThemeProvider>
)}


export default Navbar;