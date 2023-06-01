import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { logoutUser } from '../../features/user/userSlice';

import logo from '../../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const { total } = useSelector((store) => store.cart);
  const { user } = useSelector((store) => store.user);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/dash">
          <img src={logo} alt="Libra Share" style={{ width: '6.5rem' }} />
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
              <Link className="nav-link" to="/dash">
                <span className="d-lg-none">My Books</span>
                <span className="d-none d-lg-inline">Library</span>
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className='greeting-container'>
              <span>Hello, </span>
              <div
                className="nav-link dropdown"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <p className="me-3">
                  {user?.firstName?.charAt(0).toUpperCase() +
                      user?.firstName?.slice(1)
                    }
                </p>
                {isDropdownOpen && (
                  <div
                    className="dropdown-menu show"
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                      top: '100%',
                      left: '0',
                    }}
                  >
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
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
