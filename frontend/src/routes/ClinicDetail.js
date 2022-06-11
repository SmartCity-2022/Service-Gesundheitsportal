import * as React from 'react'
import Navbar from '../components/Navbar'
import api from '../service/Api'


const ClinicDetailView = () => {

    const [data, setData] = React.useState([])
    const id = React.useParams()

    React.useEffect(() => { fetch_detail() })

    const fetch_detail = async () => {
        setData()
    }

    return (
    <>
        <Navbar />
        <ThemeProvider theme = {theme}>
            <Grid display="flex" flexDirection="column" m="5%" gap={8}>
                
            </Grid>
        </ThemeProvider>
    </>
    )
}


export default ClinicDetailView;