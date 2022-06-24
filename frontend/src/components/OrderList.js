import * as React from 'react'
import { Table, TableHead, TableContainer, TableRow, TableCell, TableBody, Button } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import theme from './Theme'
import moment from 'moment'


const OrderList = (props) => {
    return (
    <ThemeProvider theme = { theme }>
    <TableContainer elevation={0}>
    <Table sx={{ minWidth: 650 }} size="large">
        
        <TableHead>
            <TableRow>
                <TableCell>Bestell-Nr </TableCell>
                <TableCell align="right">Bestell-Datum </TableCell>
                <TableCell align="right">Erweiterte Ansicht</TableCell>
            </TableRow>
        </TableHead>
        
        <TableBody>
            { Array.isArray(props.data) && props.data.map((row) => (
                <TableRow key={row.order_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell> { row.order_id } </TableCell>
                    <TableCell align="right"> { moment(row.order_date).locale("de").format("LLL") } </TableCell>
                    <TableCell align="right"> 
                        <Button size="medium" variant="contained" href={"/bestellungen/" + row.order_id}>
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


export default OrderList;