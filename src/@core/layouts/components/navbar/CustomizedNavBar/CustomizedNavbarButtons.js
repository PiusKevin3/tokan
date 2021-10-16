// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Map,List } from 'react-feather'
import { NavItem, NavLink,Button, ButtonGroup  } from 'reactstrap'

const CustomizedNavbarButtons = (props) => {


  return (
    <Fragment>
   
    
    
     
     
      <ButtonGroup   size="sm" className='mb-1'>
            <Button outline  color='primary' className='text-dark' tag={Link} to='/map'>
                <Map size={24} color="grey" />
                Map
            </Button>
            <Button outline  color='primary' className='text-dark' tag={Link} to='/list'>
            <List size={24} color="grey" />
                List
            </Button>
          </ButtonGroup>
   
     
     
    </Fragment>
  )
}

export default CustomizedNavbarButtons
