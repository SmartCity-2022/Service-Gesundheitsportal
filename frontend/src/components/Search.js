import * as React from 'react'
import { Grid, MenuItem, TextField, Button } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import theme from './Theme'


const Search = (props) => {

    const [state, setState] = React.useState({
        type: "",
        search: ""
    })
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.callback(state.type, state.search)
    };

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setState({ ...state, [name]: value });
    }

    return (
    <ThemeProvider theme = {theme}>
        <Grid display = "flex" justifyContent = "center" alignItems = "center" my = "4rem" px = "4rem">
        <form onSubmit = { handleSubmit } style = {{ display: "flex", width: "100%" }}>
        
            <TextField
                select
                required
                name = "type"
                label = "Such-Type"
                sx = {{ width: "15rem" }}
                value = { state.type }
                onChange = { handleChange }
            >
                <MenuItem value = { "medicine" }>Medikamente</MenuItem>
                <MenuItem value = { "clinic" }>Kliniken</MenuItem>
            </TextField>

            <TextField
                hiddenLabel
                name = "search"
                placeholder = 'Wonach möchten Sie suchen ?'
                variant = "filled"
                sx = {{ width: "100%", px: "1rem" }}
                value = { state.search }
                onChange = { handleChange }
            />

            <Button 
                type = "submit"
                variant = "contained"
                sx = {{ height: "56px", px: "1.5rem" }}
            > Suchen
            </Button>
        
        </form>
        </Grid>
    </ThemeProvider>
)}


export default Search;