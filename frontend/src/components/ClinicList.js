import * as React from 'react'
import { Table, TableHead, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import moment from 'moment'
import theme from './Theme'


const ClinicList = (props) => {
    return (
    <ThemeProvider theme = { theme }>
    <TableContainer elevation={0}>
    <Table sx={{ minWidth: 650 }} size="large">
        
        <TableHead>
            <TableRow>
                <TableCell>Klinik</TableCell>
                <TableCell align="right">Straße</TableCell>
                <TableCell align="right">Hausnummer</TableCell>
                <TableCell align="right">Telefon</TableCell>
                <TableCell align="right">Öffnungszeit</TableCell>
                <TableCell align="right">Schließzeit</TableCell>
                <TableCell align="right">Erweiterte Ansicht</TableCell>
            </TableRow>
        </TableHead>
        
        <TableBody>
            { Array.isArray(props.data) && props.data.map((row) => (
                <TableRow key={row.clinic_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell> { row.title } </TableCell>
                    <TableCell align="right"> { row.street } </TableCell>
                    <TableCell align="right"> { row.house_number } </TableCell>
                    <TableCell align="right"> { row.phone_number } </TableCell>
                    <TableCell align="right"> { moment(row.opening_time).locale("de").format("LT") } </TableCell>
                    <TableCell align="right"> { moment(row.closing_time).locale("de").format("LT") } </TableCell>
                    <TableCell align="right"> 
                        <Button size="small" variant="contained">
                            Ansehen
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


export default ClinicList;