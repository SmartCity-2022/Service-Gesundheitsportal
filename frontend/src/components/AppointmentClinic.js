import * as React from 'react'
import { Table, TableHead, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import theme from './Theme'
import moment from 'moment'
import api from '../service/Api'


const AppointmentClinic = (props) => {

    const handleClick = async (id) => {
        await api.add_appointment(id)
        props.callback()
    }

    return (
    <ThemeProvider theme = { theme }>
    <TableContainer elevation={0}>
    <Table sx={{ minWidth: 650 }} size="large">
        
        <TableHead>
            <TableRow>
                <TableCell>Termin Nr</TableCell>
                <TableCell align="right">Datum</TableCell>
                <TableCell align="right">Termin einschreiben</TableCell>
            </TableRow>
        </TableHead>
        
        <TableBody>
            { Array.isArray(props.data) && props.data.map((row) => (
                <TableRow key={row.appointment_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell> { row.appointment_id } </TableCell>
                    <TableCell align="right"> { moment(row.date).locale("de").format("LLL") } </TableCell>
                    <TableCell align="right"> 
                        <Button size="medium" variant="contained" 
                            onClick={ function() { handleClick(row.appointment_id) } }
                        > Einschreiben
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