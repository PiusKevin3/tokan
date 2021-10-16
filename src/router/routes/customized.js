import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const CustomizedRoutes = [
  {
    path: '/Dashboard',
    component: lazy(() => import('../../views/customized/dashboard'))
  },
  {
    path: '/Agent',
    component: lazy(() => import('../../views/customized/Agent'))
  },
  {
    path: '/Customers',
    component: lazy(() => import('../../views/customized/Customers'))
  },
  {
    path: '/Analytics',
    component: lazy(() => import('../../views/dashboard/analytics')) //../../views/customized/Analytics
  },
  {
    path: '/Settings',
    component: lazy(() => import('../../views/pages/account-settings')) // ../../views/customized/Settings
  },
  {
    path: '/HippoChat',
    component: lazy(() => import('../../views/customized/Hippo Chat'))
    
  },
  {
    path: '/Extensions',
    component: lazy(() => import('../../views/customized/Extensions'))
  },
  {
    path: '/Support',
    component: lazy(() => import('../../views/customized/Support'))
  },
  {
    path: '/map',
    component: lazy(() => import('../../views/customized/dashboard'))
  },
  {
    path: '/list',
    component: lazy(() => import('../../views/customized/Agent'))
  }
]

export default CustomizedRoutes
