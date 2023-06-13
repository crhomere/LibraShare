import { Link } from 'react-router-dom';
import img from '../../assets/images/book-tree.png';
import './ErrorPage.css';

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-content">
        <img src={img} alt="not found" className="error-image" />
        <div className="error-text">
          <h3>Ohh! Page Not Found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/dash">back home</Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
