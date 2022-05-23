import { React, Component } from 'react'
import icon1 from '../assets/home.svg'
import icon2 from '../assets/appointment.svg'
import icon3 from '../assets/hospital.svg'
import icon4 from '../assets/medicine.svg'
import icon5 from '../assets/search.svg'

export class Navbar extends Component {

    render() { 
        return (
        <div className = 'flex justify-around items-center w-auto h-32'>
            <div className = 'grid grid-cols-5 gap-5'>
                <img 
                    src = { icon1 } alt = 'nav' 
                    className = 'w-14 p-2 bg-primary rounded-lg'
                />
                <img 
                    src = { icon2 } alt = 'nav' 
                    className = 'w-14 p-2 bg-primary rounded-lg'
                />
                <img 
                    src = { icon3 } alt = 'nav' 
                    className = 'w-14 p-2 bg-primary rounded-lg'
                />
                <img 
                    src = { icon4 } alt = 'nav' 
                    className = 'w-14 p-2 bg-primary rounded-lg'
                />
                <img 
                    src = { icon5 } alt = 'nav' 
                    className = 'w-14 p-2 bg-primary rounded-lg'
                />
            </div>
        </div>
        )
    }

}


export default Navbar