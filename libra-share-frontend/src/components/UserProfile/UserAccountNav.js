import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserAccountNav = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={`/dash/user-profile/${user?.id}`}>
            Account Details
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to={`/dash/user-profile/${user?.id}/books`}
          >
            My Books
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserAccountNav;
