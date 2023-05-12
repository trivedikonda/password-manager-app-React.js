import {Component} from 'react'
import {v4} from 'uuid'
import WebsiteItem from '../WebsiteItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    showPassword: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeCheck = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  deleteWebsite = id => {
    const {passwordsList} = this.state
    const filteredPasswordsList = passwordsList.filter(each => each.id !== id)

    this.setState({passwordsList: filteredPasswordsList})
  }

  getSearchResults = () => {
    const {passwordsList, searchInput} = this.state
    return passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPasswordItem = {
      id: v4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordItem],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {showPassword, searchInput, website, username, password} = this.state
    const searchResults = this.getSearchResults()
    return (
      <div className="app-container">
        <div className="container">
          <img
            className="logo"
            height={40}
            width={120}
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="first-container">
            <form className="form-container" onSubmit={this.onAddPassword}>
              <h1 className="heading">Add New Password</h1>
              <div className="input-field-container">
                <img
                  className="input-logo"
                  height={15}
                  width={15}
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  alt="website"
                />
                <div className="vertical"> </div>
                <input
                  value={website}
                  placeholder="Enter Website"
                  className="input-field"
                  onChange={this.onChangeWebsite}
                />
              </div>

              <div className="input-field-container">
                <img
                  className="input-logo"
                  height={15}
                  width={15}
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                />
                <div className="vertical"> </div>
                <input
                  value={username}
                  className="input-field"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>

              <div className="input-field-container">
                <img
                  className="input-logo"
                  height={15}
                  width={15}
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                />
                <div className="vertical"> </div>
                <input
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  className="input-field"
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div>
              <img
                height={240}
                width={240}
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
                alt="password manager"
              />
            </div>
          </div>
        </div>

        <div className="second-container">
          <div className="password-count-search-container">
            <div className="password-head-and-count">
              <h3 className="heading">Your Passwords</h3>
              <p className="password-count">{searchResults.length}</p>
            </div>
            <div className="input-field-search-container">
              <img
                className="input-logo"
                height={15}
                width={15}
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
              />
              <div className="vertical-search"> </div>
              <input
                value={searchInput}
                type="search"
                className="input-field"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>

          <hr className="line" />
          <div className="show-passwords-container">
            <input
              type="checkbox"
              id="checkbox"
              onChange={this.onChangeCheck}
            />
            <label className="show-password-txt" htmlFor="checkbox">
              Show Passwords
            </label>
          </div>
          {searchResults.length !== 0 ? (
            <ul className="bottom-show-hide-container">
              {searchResults.map(eachWebsite => (
                <WebsiteItem
                  key={eachWebsite.id}
                  websiteDetails={eachWebsite}
                  deleteWebsite={this.deleteWebsite}
                  showPassword={showPassword}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p className="heading">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
