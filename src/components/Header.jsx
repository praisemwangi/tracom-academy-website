import {Link} from 'react-router-dom'


function Header() {
  return (
    <>
      <header className="main-header">
        <nav className="main-nav">
          <img src="./src/Assets/tracom_services_cover.jpg" alt="tracom-logo" className="main-logo" />
          <ul id="main-nav-ul">
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">Team</Link></li>
            <li><Link to={"/ContactUs"}>Contact Us</Link></li>
          </ul>
          <div className="button">
          <Link to="/register" className="btn">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        </nav>
      </header>
    </>
  )
}

export default Header