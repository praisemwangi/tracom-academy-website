import {Link} from 'react-router-dom';

function Navbar () {
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
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="button">
          <Link to="/Register.jsx" className="btn">
            Register
          </Link>
          <Link to="/Login.jsx" className="btn">
            Login
          </Link>
        </div>
      </nav>
    </header>
  </>
  )
}

export default Navbar