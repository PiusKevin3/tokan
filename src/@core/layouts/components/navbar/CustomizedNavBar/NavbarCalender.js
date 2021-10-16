// ** React Imports
import { Fragment,useState } from 'react'

// ** Third Party Components
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

const NavbarCalender = (props) => {
  const [value, onChange] = useState(['10:00', new Date()]);

  return (
    <Fragment>
   
   
    <div  className="text-primary mb-1 p-1" >
    <TimeRangePicker
        onChange={onChange}
        value={value}
      />
      </div>
        
    </Fragment>
  )
}

export default NavbarCalender
