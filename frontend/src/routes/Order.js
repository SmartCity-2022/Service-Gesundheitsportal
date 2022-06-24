import * as React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Cart from '../components/Cart'
import api from '../service/Api'
import OrderList from '../components/OrderList'


const OrderView = () => {

    const [items, setItems] = React.useState([])
    const [data, setData] = React.useState([])
    React.useEffect(() => { fetch_appointment() }, [])

    const fetch_appointment = async () => {
        var items = JSON.parse(localStorage.getItem('items')) || []
        setItems(items)
        setData(await api.citizen_orders())
    }

    const handle_change = () => { 
        fetch_appointment() 
    }

    return (
        <>
            <Navbar />
            <Body 
                title={ items.length === 0 ? "Keine Medikamente im Warenkorb" : "Warenkorb" }
                content={ items.length > 0 ? <Cart data={items} callback = {handle_change} /> : [] }
            />
            <Body 
                title={ data.length === 0 ? "Keine Bestellungen vorhanden" : "Bestellungen" }
                content={ data.length > 0 ? <OrderList data={data} /> : [] }
            />
        </>
    )
}


export default OrderView;