import { User,Grid, Users,BarChart2,Settings,MessageCircle,ExternalLink,Headphones} from 'react-feather'

export default [
 
  {
    id: 'Dashboard',
    title: 'Dashboard',
    icon: <Grid size={20} />,
    navLink: '/Dashboard'
  },
  {
    id: 'Agent',
    title: 'Agent',
    icon: <User size={20} />,
    navLink: '/Agent'
  },
  {
    id: 'Customers',
    title: 'Customers',
    icon: <Users size={20} />,
    navLink: '/Customers'
  },
  {
    id: 'Analytics',
    title: 'Analytics',
    icon: <BarChart2 size={20} />,
    navLink: '/Analytics'
  },
  {
    id: 'Settings',
    title: 'Settings',
    icon: <Settings size={20} />,
    navLink: '/Settings'
  
  },
  // {
  //   id: 'HippoChat',
  //   title: 'Hippo Chat',
  //   icon: <MessageCircle size={20} />,
  //   navLink: '/HippoChat'
  // },
  {
    id: 'Extensions',
    title: 'Extensions',
    icon: <ExternalLink size={20} />,
    navLink: '/Extensions'
  },
  {
    id: 'Support',
    title: 'Support',
    icon: <Headphones size={20} />,
    navLink: '/Support'
  
  },
  
]
