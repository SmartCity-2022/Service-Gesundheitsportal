import * as React from 'react';
import Navbar from '../components/Navbar'
import Search from '../components/Search'


const SearchView = () => {

    const [data, setData] = React.useState([])
    const handleData = (data) => { console.log(data) }

    return (
    <>
        <Navbar />
        <Search callback = { handleData } />
    </>
)}


export default SearchView;