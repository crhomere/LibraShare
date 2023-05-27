import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './SideNavbar.css'

const SideNavbar = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="side-navbar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/dash">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/dash/user-profile/${user.id}`}>
            User Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dash/add-book">
            Add Book
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
