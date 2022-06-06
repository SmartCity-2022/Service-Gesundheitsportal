import * as React from 'react';
import Medicines from '../components/Medicines'
import Clinics from '../components/Clinics'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import api from '../service/api'


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

    function List() {
        if (state.type === 'medicine') return <Medicines data={state.data}/>
        if (state.type === 'clinic') return <Clinics data={state.data}/>
    }

    return (
    <>
        <Navbar />
        <Search callback = { get_data } />
        <List />
    </>
)}


export default SearchView;