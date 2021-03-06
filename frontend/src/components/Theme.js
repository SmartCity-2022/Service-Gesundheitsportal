import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';


const theme = createTheme({
    palette: {
        primary: {
            main: blue[900]
        },
        secondary: {
            main: "#586F7C"
        },
    },
    typography: {
        fontFamily: 'Open Sans'
    }
})


export default theme;