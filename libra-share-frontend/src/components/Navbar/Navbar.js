import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const { total } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.user);

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
            <Link className="nav-link" to={`/user-profile/${user.id}`}>
              <p className="me-3">
                {user && user.username
                  ? user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)
                  : ''}
              </p>
            </Link>
            <Link className="nav-link" to="/cart">
              <p className="me-3">
                <FontAwesomeIcon icon={faBook} />
                <span> </span>
                {total}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
