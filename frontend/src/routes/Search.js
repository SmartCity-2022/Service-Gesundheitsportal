import * as React from 'react'
import MedicineList from '../components/MedicineList'
import ClinicList from '../components/ClinicList'
import Searchbar from '../components/Searchbar'
import Navbar from '../components/Navbar'
import api from '../service/Api'
import { Grid } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../components/Theme'


const SearchView = () => {

    const [state, setState] = React.useState({
        type: '',
        query: '',
        data: []
    })

    const get_data = async (type, query) => {
        setState({
            type: type,
            query: query,
            data: await api.search(type, query)
        })
    }

    function SearchList() {
        if (state.type === 'medicine') return <MedicineList data={state.data}/>
        if (state.type === 'clinic') return <ClinicList data={state.data}/>
    }

    return (
    <>
        <Navbar />
        <ThemeProvider theme = {theme}>
            <Grid display="flex" flexDirection="column" m="5%" gap={8}>
                <Searchbar callback={get_data} />
                <SearchList />
            </Grid>
        </ThemeProvider>
    </>
    )
}


export default SearchView;