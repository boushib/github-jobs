import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => (
  <nav>
    <div className="container">
      <div className="nav__inner">
        <div className="nav__brand">Github Jobs</div>
        <ul className="main-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
