import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  storePassword = event => {
    this.setState({password: event.target.value})
  }

  storeUsername = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, showSubmitError, errorMsg} = this.state
    return (
      <form className="login-container" onSubmit={this.onSubmitForm}>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </div>
        <label htmlFor="username">USERNAME</label>
        <br />
        <input
          value={username}
          onChange={this.storeUsername}
          type="text"
          id="username"
          placeholder="Username"
        />
        <label htmlFor="password">PASSWORD</label>
        <br />
        <input
          value={password}
          onChange={this.storePassword}
          type="password"
          id="password"
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
        {showSubmitError && <p>*{errorMsg}</p>}
      </form>
    )
  }
}

export default LoginForm
