import {Link, withRouter} from 'react-router-dom'

import Logout from '../Logout'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <li>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </button>
      </li>
    </Link>
    <div className="header-side-heading">
      <Link to="/">
        <li className="header-side-heading-partition">HOME</li>
      </Link>
      <Link to="/jobs">
        <li className="header-side-heading-partition">JOBS</li>
      </Link>
    </div>
    <div>
      <Logout />
    </div>
  </div>
)

export default withRouter(Header)
