import * as React from 'react'
import Navbar from '../components/Navbar'
import MedicineList from '../components/MedicineList'
import api from '../service/Api'


const MedicineView = () => {

    const [data, setData] = React.useState([])
    React.useEffect(() => { fetch() })

    const fetch = async () => {
        setData(await api.medicines())
    }

    return (
    <>
        <Navbar />
        <MedicineList data = {data} />
    </>
    )
}


export default MedicineView;