import { Nav, NavItem, NavLink } from 'reactstrap'
import { User, Lock, Info, Link, Bell,Grid, Users,BarChart2,Settings,MessageCircle,ExternalLink,Headphones} from 'react-feather'


const CustomMenu = props => {
  // console.log('Menu:', props)
  // return <h6>Custom Menu</h6>

  return (
    <Nav className='nav-left' pills vertical>
      <NavItem>
        <NavLink >
          <Grid size={30} className='mr-3' />
          <span className='font-weight-bold'>Dashboard</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink >
          <User size={30} className='mr-3' />
          <span className='font-weight-bold'>Agent</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink >
          <Users size={30} className='mr-3' />
          <span className='font-weight-bold'>Customers</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink >
          <BarChart2 size={30} className='mr-3' />
          <span className='font-weight-bold'>Analytics</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink >
          <Settings size={30} className='mr-3' />
          <span className='font-weight-bold'>Settings</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink >
          <MessageCircle size={30} className='mr-3' />
          <span className='font-weight-bold'>Hippo Chat</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink >
          <ExternalLink size={30} className='mr-3' />
          <span className='font-weight-bold'>Extensions</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink >
          <Headphones size={30} className='mr-3' />
          <span className='font-weight-bold'>Support</span>
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default CustomMenu
