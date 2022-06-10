import * as React from 'react';
import { Table, TableHead, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import CheckIcon from '@mui/icons-material/Check'
import DoDisturbIcon from '@mui/icons-material/DoDisturb'
import theme from './Theme'


const MedicineList = (props) => {
    return (
    <ThemeProvider theme = { theme }>
    <TableContainer elevation={0} sx = {{padding: 5}}>
    <Table sx={{ minWidth: 650 }} size="large">
        
        <TableHead>
            <TableRow>
                <TableCell>Arzneiname</TableCell>
                <TableCell align="right">Inhalt in (g/ml)</TableCell>
                <TableCell align="right">Verschreibungspflichtig</TableCell>
                <TableCell align="right">Beschreibung</TableCell>
                <TableCell align="right">Warenkorb</TableCell>
            </TableRow>
        </TableHead>
        
        <TableBody>
            { Array.isArray(props.data) && props.data.map((row) => (
                <TableRow key={row.medicine_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell> { row.title } </TableCell>
                    <TableCell align="right"> { row.content } </TableCell>
                    <TableCell align="right"> { row.pharmacy_duty === true ? <CheckIcon/> : <DoDisturbIcon/> } </TableCell>
                    <TableCell align="right"> { row.effect } </TableCell>
                    <TableCell align="right"> 
                        <Button size="small" variant="contained">
                            Hinzufügen
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


export default MedicineList;