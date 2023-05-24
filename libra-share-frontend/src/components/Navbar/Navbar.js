import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const { total } = useSelector((store) => store.cart);

  // Rest of the code...

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Libra Share" style={{ width: '6rem' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <span className="d-lg-none">My Books</span>
                <span className="d-none d-lg-inline">My Books</span>
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <p className="me-3">
              <span className="d-lg-none">Cart:</span>
              <span className="d-none d-lg-inline">Books in your cart: </span>
              {total}
            </p>
            {/* Rest of the code */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
