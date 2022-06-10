import * as React from 'react'
import api from '../service/Api'
import StatusView from '../routes/Status'

const Auth = (props) => {

    const [auth, setAuth] = React.useState(false)
    React.useEffect(() => { fetch() })

    const fetch = async () => {
        setAuth(await api.check_auth())
    }
    
    return (
        <> { auth ? props.page : <StatusView /> } </>
    )
}


export default Auth;