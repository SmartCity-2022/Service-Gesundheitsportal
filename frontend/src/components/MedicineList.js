import * as React from 'react';
import { Table, TableHead, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { ThemeProvider } from '@emotion/react'
import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check'
import DoDisturbIcon from '@mui/icons-material/DoDisturb'
import theme from './Theme'


const MedicineList = (props) => {

    const [show, setShow] = React.useState(false)
   
    const handeClick = (item) => {
        var items = JSON.parse(localStorage.getItem('items')) || []
        items.push(item)
        localStorage.setItem('items', JSON.stringify(items))
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }

    return (
    <ThemeProvider theme = { theme }>
    <TableContainer elevation={0}>
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
                        <Button size="medium" variant="contained" 
                            onClick={ function() { handeClick(row) } }
                        > Hinzuf??gen
                        </Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>

    </Table>
    </TableContainer>
    { show ? <Alert severity="success">Medikament wurde zum Warenkorb hinzugef??gt</Alert> : <></> }
    </ThemeProvider>
    )
}


export default MedicineList;