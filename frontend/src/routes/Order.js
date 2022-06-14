import * as React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import api from '../service/Api'


const OrderView = () => {

    const [data, setData] = React.useState([])
    React.useEffect(() => { fetch_appointment() }, [])

    const fetch_appointment = async () => {
        setData(await api.citizen_orders())
    }

    return (
        <>
            <Navbar />
            <Body 
                title={ data.length === 0 ? "Keine Bestellungen vorhanden" : "Bestellungen" }
                content={data}
            />
        </>
    )
}


export default OrderView;