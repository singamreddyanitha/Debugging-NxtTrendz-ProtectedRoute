import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }
  // FIX1: The Spread Operator should be used while sending the props
  return <Route {...props} />
}

export default ProtectedRoute
