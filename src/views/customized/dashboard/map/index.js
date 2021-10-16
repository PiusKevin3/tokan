// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Maps
import MapBasic from './MapsBasic'

// ** Styles
import '@styles/react/libs/maps/map-leaflet.scss'

const Maps = () => {
  return (
    <Fragment>
         <MapBasic />
      {/* <Breadcrumbs
        breadCrumbTitle='React Leaflet Maps'
        breadCrumbParent='Charts & Maps'
        breadCrumbActive='Leaflet Maps'
      />
      <Row>
       
        <Col sm='12'>
          <MapBasic />
        </Col>
       
      </Row> */}
    </Fragment>
  )
}

export default Maps
