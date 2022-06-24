import * as React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import api from '../service/Api'
import moment from 'moment'
import OrderMedicineList from '../components/OrderMedicineList'


const OrderDetailView = () => {

    const { id } = useParams()
    const [order, setOrder] = React.useState([])
    React.useEffect(() => { fetch_detail() }, [])

    const fetch_detail = async () => {
        setOrder(await api.order(id))
    }

    return (
    <>
        <Navbar />
        <Body 
            title={ "Bestellung " + order.order_id + " - " + moment(order.order_date).locale("de").format("LLL") }
            content={ <OrderMedicineList data = {order.inventory} /> }
        />
    </>
    )
}


export default OrderDetailView;