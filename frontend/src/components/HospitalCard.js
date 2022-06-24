import * as React from 'react'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import { ThemeProvider } from '@emotion/react'
import theme from './Theme'


const HospitalCard = (props) => {
    return (
        <ThemeProvider theme = {theme}>
            <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                <CardActionArea>
                    <CardMedia component="img" height="200" image={props.img}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="secondary">
                            { props.title }
                        </Typography>
                        <Typography variant="body2" color="secondary">
                            { props.founded }
                        </Typography>
                        <Typography variant="body2" color="secondary">
                            { props.adress }
                        </Typography>
                        <Typography variant="body2" color="secondary">
                            { props.employees } 
                        </Typography>
                        <Typography variant="body2" color="secondary">
                            { props.beds } 
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    )
}


export default HospitalCard;