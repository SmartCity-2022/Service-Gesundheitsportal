import * as React from 'react';
import { Table, TableHead, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { ThemeProvider } from '@emotion/react'
import CheckIcon from '@mui/icons-material/Check'
import DoDisturbIcon from '@mui/icons-material/DoDisturb'
import theme from './Theme'
import api from '../service/Api'


const Cart = (props) => {

    const handeClick = (item) => {
        var items = JSON.parse(localStorage.getItem('items')) || []
        items.splice(props.data.indexOf(item), 1)
        localStorage.setItem('items', JSON.stringify(items))
        props.callback()
    }

    const handleSubmit = async () => {
        var items = JSON.parse(localStorage.getItem('items'))
        await api.create_order(items)
        localStorage.setItem('items', JSON.stringify([]))
        props.callback()
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
                <TableCell align="right">Warenkorb entfernen</TableCell>
            </TableRow>
        </TableHead>
        
        <TableBody>
            { Array.isArray(props.data) && props.data.map((row) => (
                <TableRow key={props.data.indexOf(row)} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell> { row.title } </TableCell>
                    <TableCell align="right"> { row.content } </TableCell>
                    <TableCell align="right"> { row.pharmacy_duty === true ? <CheckIcon/> : <DoDisturbIcon/> } </TableCell>
                    <TableCell align="right"> { row.effect } </TableCell>
                    <TableCell align="right"> 
                        <Button size="medium" variant="contained" 
                            onClick={ function() { handeClick(row) } }
                        > Entfernen
                        </Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
            
    </Table>
    </TableContainer>
    <Button size="large" variant="contained" onClick = { handleSubmit }>Bestellung abschließen</Button>
    </ThemeProvider>
    )
}


export default Cart;