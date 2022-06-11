import * as React from 'react'
import Body from '../components/Body'
import Navbar from '../components/Navbar'
import MedicineList from '../components/MedicineList'
import api from '../service/Api'


const MedicineView = () => {

    const [data, setData] = React.useState([])
    React.useEffect(() => { fetch_medicine() })

    const fetch_medicine = async () => {
        setData(await api.medicines())
    }

    return (
        <>
            <Navbar />
            <Body 
                title="Medikamente"
                content = { <MedicineList data={data}/> }    
            />
        </> 
    )
}


export default MedicineView;