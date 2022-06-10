import * as React from 'react';
import MedicineList from '../components/MedicineList'
import ClinicList from '../components/ClinicList'
import Searchbar from '../components/Searchbar'
import Navbar from '../components/Navbar'
import api from '../service/Api'


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
        <Searchbar callback = { get_data } />
        <SearchList />
    </>
    )
}


export default SearchView;