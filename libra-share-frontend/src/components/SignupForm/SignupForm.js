import { useState } from 'react';
import { Container, Form, Alert, Button } from 'react-bootstrap';
import signUpImg from '../../images/library-signup.png';

const SignupForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [addressLine, setAddressLine] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleInputChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-form">
      <div>
        <Container className="my-5 py-3 form-container">
          <h2 className="text-center mb-4">Register</h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
               className="custom-input"
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirmation">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
                value=""
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Phone Number"
                name="phoneNumber"
                value=""
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Address Line</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address Line"
                name="addressLine"
                value=""
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value=""
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value=""
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Zip code</Form.Label>
              <Form.Control
                type="number"
                placeholder="Zip Code"
                name="zipCode"
                value=""
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                className="btn text-white mt-3 main-color-signup-btn"
                variant="primary"
                type="submit"
              >
                Register
              </Button>
              {/* {userId && (
            <span style={{ marginLeft: '10px' }}>
              Already have an account?
              <Link
                to={`/dashboard/${userId}`}
                style={{ textDecoration: 'none' }}
              >
                <span className="text-decoration-none main-color-text">
                  Log in
                </span>
              </Link>
            </span>
          )} */}

              {/* {!userId && (
            <span style={{ marginLeft: '10px' }}>
              Already have an account?
              <Link to="/user-login" style={{ textDecoration: 'none' }}>
                <span className="text-decoration-none main-color-text">
                  Log in
                </span>
              </Link>
            </span>
          )} */}
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default SignupForm;
