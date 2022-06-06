import * as React from 'react';
import { 
    Table, 
    TableHead,
    Paper, 
    TableContainer, 
    TableRow, 
    TableCell, 
    TableBody,
    Button 
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './Theme'


const Clinics = (props) => {
    return (
    <ThemeProvider theme = { theme }>
    <TableContainer elevation={0} sx = {{padding: 5}} component={Paper}>
    <Table sx={{ minWidth: 650 }} size="large">
        
        <TableHead>
            <TableRow size = "20" >
                <TableCell>Klinik</TableCell>
                <TableCell align="right">Straße</TableCell>
                <TableCell align="right">Hausnummer</TableCell>
                <TableCell align="right">Telefon</TableCell>
                <TableCell align="right">Öffnungszeit</TableCell>
                <TableCell align="right">Schließzeit</TableCell>
                <TableCell align="right">Termine</TableCell>
            </TableRow>
        </TableHead>
        
        <TableBody>
            { Array.isArray(props.data) && props.data.map((row) => (
                <TableRow key={row.clinic_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell> { row.title } </TableCell>
                    <TableCell align="right"> { row.street } </TableCell>
                    <TableCell align="right"> { row.house_number } </TableCell>
                    <TableCell align="right"> { row.phone_number } </TableCell>
                    <TableCell align="right"> { row.opening_time } </TableCell>
                    <TableCell align="right"> { row.closing_time } </TableCell>
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
)}


export default Clinics;