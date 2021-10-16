import { Fragment, useState, useEffect } from 'react'
import Tabs from './Tabs'
import axios from 'axios'
import Dashboard from './Dashboard'
import Breadcrumbs from '@components/breadcrumbs'
import Agent from './Agent'
import Customers from './Customers'
import Analytics from './Analytics'
import Settings from './Settings'
import HippoChat from './HippoChat'
import Extensions from './Extensions'
import Support from './Support'

import { Row, Col, TabContent, TabPane, Card, CardBody } from 'reactstrap'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const SideBarOptions = () => {
  const [activeTab, setActiveTab] = useState('1'),
    [data, setData] = useState(null)

  const toggleTab = tab => {
    setActiveTab(tab)
  }

//   useEffect(() => {
//     axios.get('/account-setting/data').then(response => setData(response.data))
//   }, [])

  return (
    <Fragment>

      {data !== null ? (
        <Row>
          <Col className='mb-2 mb-md-0' md='3'>
            <Tabs activeTab={activeTab} toggleTab={toggleTab} />
          </Col>
          <Col md='9'>
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                    <Dashboard  />
                  </TabPane>
                  <TabPane tabId='2'>
                    <Agent />
                  </TabPane>
                  <TabPane tabId='3'>
                    <Customers  />
                  </TabPane>
                  <TabPane tabId='4'>
                    <Analytics  />
                  </TabPane>
                  <TabPane tabId='5'>
                    <Settings  />
                  </TabPane>
                  <TabPane tabId='6'>
                    <HippoChat />
                  </TabPane>
                  <TabPane tabId='7'>
                    <Extensions  />
                  </TabPane>
                  <TabPane tabId='8'>
                    <Support  />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default SideBarOptions
