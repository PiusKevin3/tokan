// ** React Imports
import { Fragment,useState } from 'react'

// ** Third Party Components
import { Map,List } from 'react-feather'
import { NavItem, NavLink,Button, DropdownMenu,ButtonGroup,ButtonDropdown,DropdownToggle,DropdownItem  } from 'reactstrap'

const NavbarAllTeams = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);


  return (
    <Fragment>
   
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}  className='mb-1 p-1' >
        <DropdownToggle caret  size="sm" outline color='primary' className='text-dark' >
        All Teams
        </DropdownToggle>
        <DropdownMenu>
        <DropdownItem className='text-dark' >All Teams</DropdownItem>
        </DropdownMenu>
    </ButtonDropdown>
   
   
    </Fragment>
  )
}

export default NavbarAllTeams
