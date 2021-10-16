import { Fragment } from 'react'
import CustomizedNavbarButtons from "./CustomizedNavbarButtons"
import NavbarAllTeams from "./NavbarAllTeams"
import NavbarCalender from "./NavbarCalender"



const index = (props)=> {
    return (
      

          <ul className='nav navbar-nav align-items-center ml-auto'>

            <CustomizedNavbarButtons/>
            <NavbarCalender/>
            <NavbarAllTeams/>

          </ul>

     
    )
}


export default index
