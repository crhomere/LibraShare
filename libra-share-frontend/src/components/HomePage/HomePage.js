import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import mainImg from '../../images/library-main.png';

const HomePage = () => {
  const [showShading, setShowShading] = useState(true);
  const [showWebsite, setShowWebsite] = useState(false);
  const shadingControls = useAnimation();
  const contentControls = useAnimation();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    shadingControls.start({ opacity: 0 }).then(() => {
      setShowShading(false);
      setShowWebsite(true);
      contentControls.start({ opacity: 1 });
    });
  };

  useEffect(() => {
    if (!showShading) {
      contentControls.start({ opacity: 1 });
    }
  }, [showShading, contentControls]);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="home-page">
      {showShading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={shadingControls}
          transition={{ duration: 2 }}
          className="landing-page-image"
        >
          <button className="landing-page-button" onClick={handleButtonClick}>
            Enter Library
          </button>
        </motion.div>
      )}

      {showWebsite && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={contentControls}
          transition={{ duration: 1 }}
          className="landing-page-container"
        >
          <h1 className="welcome-h1">Welcome to Libra Share</h1>
          <p className="welcome-p">Explore collection of books.</p>
          <div className="log-sig-btn-container">
            <button
              className="btn btn-primary main-color-btn home-btn"
              onClick={handleLoginClick}
            >
              Log In
            </button>
            <button
              className="btn btn-primary main-color-btn home-btn"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;
