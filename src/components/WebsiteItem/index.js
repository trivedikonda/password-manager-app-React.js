import './index.css'

const WebsiteItem = props => {
  const profilePicColor = [
    '#9ba9eb',
    '#c3caea',
    '#5763a5',
    '#f8fafc',
    '#454f84',
    '#0b69ff',
    '#94a3b8',
    '#b6c3ca',
    '#7683cb',
    '#f59e0b',
    ' #10b981',
    '#f97316',
    '#14b8a6',
    '#b91c1c',
    '#ffffff',
    '#0ea5e9',
    '#64748b',
  ]
  const setBackgroundColorForProfile =
    profilePicColor[Math.floor(Math.random() * profilePicColor.length)]

  const {websiteDetails, deleteWebsite, showPassword} = props
  const {id, website, username, password} = websiteDetails

  const onDeleteWebsite = () => {
    deleteWebsite(id)
  }

  return (
    <li className="website-item">
      <div className="website-container">
        <div
          className="profile-icon"
          style={{background: setBackgroundColorForProfile}}
        >
          {website.slice(0, 1).toUpperCase()}
        </div>

        <div className="website-details">
          <p>{website}</p>
          <p>{username}</p>

          {showPassword ? (
            <p className="password">{password}</p>
          ) : (
            <img
              className="stars-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
              alt="stars"
            />
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={onDeleteWebsite}
        className="delete-icon-container"
        data-testid="delete"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default WebsiteItem
