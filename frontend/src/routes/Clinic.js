import * as React from 'react'
import Navbar from '../components/Navbar'
import ClinicList from '../components/ClinicList'
import api from '../service/Api'


const ClinicView = () => {

    const [data, setData] = React.useState([])
    React.useEffect(() => { fetch() })

    const fetch = async () => {
        setData(await api.clinics())
    }

    return (
    <>
        <Navbar />
        <ClinicList data = {data} />
    </>
    )
}


export default ClinicView;