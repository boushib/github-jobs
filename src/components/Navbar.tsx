import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => (
  <nav>
    <div className="container">
      <div className="nav__inner">
        <div className="nav__brand">Github Jobs</div>
        <ul className="main-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
