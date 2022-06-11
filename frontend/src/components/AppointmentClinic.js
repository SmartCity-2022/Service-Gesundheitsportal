import * as React from 'react'
import { Table, TableHead, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import theme from './Theme'


const AppointmentClinic = (props) => {
    return (
    <ThemeProvider theme = { theme }>
    <TableContainer elevation={0}>
    <Table sx={{ minWidth: 650 }} size="large">
        
        <TableHead>
            <TableRow>
                <TableCell>Termin Nr</TableCell>
                <TableCell align="right">Datum</TableCell>
                <TableCell align="right">Klinik ansehen</TableCell>
                <TableCell align="right">Termin entfernen</TableCell>
            </TableRow>
        </TableHead>
        
        <TableBody>
            { Array.isArray(props.data) && props.data.map((row) => (
                <TableRow key={row.appointment_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell> { row.appointment_id } </TableCell>
                    <TableCell align="right"> { row.date } </TableCell>
                    <TableCell align="right"> 
                        <Button size="small" variant="contained">
                            Ansehen
                        </Button>
                    </TableCell>
                    <TableCell align="right"> 
                        <Button size="small" variant="contained">
                            Entfernen
                        </Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>

    </Table>
    </TableContainer>
    </ThemeProvider>
    )
}


export default AppointmentClinic;