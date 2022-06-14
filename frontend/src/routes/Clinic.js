import * as React from 'react'
import Body from '../components/Body'
import Navbar from '../components/Navbar'
import ClinicList from '../components/ClinicList'
import api from '../service/Api'


const ClinicView = () => {

    const [data, setData] = React.useState([])
    React.useEffect(() => { fetch_clinic() })

    const fetch_clinic = async () => {
        setData(await api.clinics())
    }

    return (
        <>
            <Navbar />
            <Body 
                title={ data.length === 0 ? "Keine Kliniken vorhanden" : "Kliniken" }
                content={<ClinicList data={data}/>}
            />
        </>
    )
}


export default ClinicView;