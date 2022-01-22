import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Logout = props => {
  const moveToLoginPage = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button type="button" onClick={moveToLoginPage}>
      Logout
    </button>
  )
}

export default withRouter(Logout)
