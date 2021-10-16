// ** JWT Service Import
import JwtService from './jwtService'

// ** Export Service as useJwt
export default function myJwt(jwtOverrideConfig) { //useJwt
  const jwt = new JwtService(jwtOverrideConfig)

  //return jwt
  
  return {
    jwt
  }
}


