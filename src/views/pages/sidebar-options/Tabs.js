import { Nav, NavItem, NavLink } from 'reactstrap'
import { User,Grid, Users,BarChart2,Settings,MessageCircle,ExternalLink,Headphones} from 'react-feather'

const Tabs = ({ activeTab, toggleTab }) => {
  
  return (
    <Nav className='nav-left' pills vertical>
      <NavItem>
        <NavLink active={activeTab === '1'} onClick={() => toggleTab('1')} >
          <Grid size={30} className='mr-3' />
          <span className='font-weight-bold'>Dashboard</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '2'} onClick={() => toggleTab('2')}  >
          <User size={30} className='mr-3' />
          <span className='font-weight-bold'>Agent</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink  active={activeTab === '3'} onClick={() => toggleTab('3')} >
          <Users size={30} className='mr-3' />
          <span className='font-weight-bold'>Customers</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink  active={activeTab === '4'} onClick={() => toggleTab('4')} >
          <BarChart2 size={30} className='mr-3' />
          <span className='font-weight-bold'>Analytics</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '5'} onClick={() => toggleTab('5')}  >
          <Settings size={30} className='mr-3' />
          <span className='font-weight-bold'>Settings</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink  active={activeTab === '6'} onClick={() => toggleTab('6')} >
          <MessageCircle size={30} className='mr-3' />
          <span className='font-weight-bold'>Hippo Chat</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '7'} onClick={() => toggleTab('7')}  >
          <ExternalLink size={30} className='mr-3' />
          <span className='font-weight-bold'>Extensions</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink  active={activeTab === '8'} onClick={() => toggleTab('8')} >
          <Headphones size={30} className='mr-3' />
          <span className='font-weight-bold'>Support</span>
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Tabs
