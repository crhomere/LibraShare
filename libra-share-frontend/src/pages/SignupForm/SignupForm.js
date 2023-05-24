import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormRow from '../../components/FormRow/FormRow';

import { Container, Form, Alert, Button } from 'react-bootstrap';

const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  phoneNumber: '',
  addressLine: '',
  city: '',
  zipcode: 'zipcode',
  state: 'state',
};

const SignupForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dietaryRestrictions: '',
        preferredCuisineTypes: '',
        groceryList: '',
        individualMenu: '',
      }),
    };
    try {
      const response = await fetch(
        'http://localhost:8080/users/register',
        requestOptions
      );
      if (response.ok) {
        const userData = await response.json();
        if (userData[0] === 'User with the same username already exists!') {
          setErrorMessage('User with the same username already exists!');
          console.log('userData[0]', userData[0]);
        } else {
          console.log('User data updated:', userData);
          console.log('User registered successfully');
          setSuccessMessage('User registered successfully');
          navigate('/login');
        }
      } else {
        console.log('Error registering user');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };


  

  return (
    <div className="signup-form">
      <div>
        <Container className="my-5 py-3 form-container">
          <h2 className="text-center mb-4">Register</h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}

          <Form onSubmit={handleSubmit}>
            <FormRow
              className="custom-input"
              label="First Name"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />

            <FormRow
              className="custom-input"
              label="Last Name"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <FormRow
              className="custom-input"
              label="Username"
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />

            <FormRow
              className="custom-input"
              label="Email"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <FormRow
              className="custom-input"
              label="Password"
              type="text"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <FormRow
              className="custom-input"
              label="Phone Number"
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <FormRow
              className="custom-input"
              label="Address Line"
              type="text"
              placeholder="Address Line"
              name="addressLine"
              value={formData.addressLine}
              onChange={handleInputChange}
              required
            />
            <FormRow
              className="custom-input"
              label="City"
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <FormRow
              className="custom-input"
              label="Zip code"
              type="text"
              placeholder="Zip code"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleInputChange}
              required
            />
            <FormRow
              className="custom-input"
              label="State"
              type="text"
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            />

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
