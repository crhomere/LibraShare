import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import FormRow from '../../components/FormRow/FormRow';

import { Container, Form, Alert, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../../features/user/userSlice';

import './Register.css';

const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  phoneNumber: '',
  addressLine: '',
  city: '',
  zipcode: '',
  state: '',
  isMember: true,
};

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState(initialState);

  const { user, isLoading } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      username,
      email,
      password,
      phoneNumber,
      addressLine,
      city,
      zipcode,
      state,
      isMember,
    } = formData;
    console.log(formData);

    if (isMember) {
      dispatch(loginUser({ email, password }));
      navigate('/home');
      return;
    }

    dispatch(
      registerUser({
        firstName,
        lastName,
        username,
        email,
        password,
        phoneNumber,
        addressLine,
        city,
        zipcode,
        state,
      })
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      isMember: true,
    }))
  };

  const toggleMember = () => {
    setFormData({ ...formData, isMember: !formData.isMember });
  };

  return (
    <section
      className={formData.isMember ? 'register-form-reg' : 'register-form-log'}
    >
      <div>
        <Container className="my-5 py-3 form-container">
          <h2 className="text-center mb-4">
            {' '}
            {formData.isMember ? 'Login' : 'Register'}
          </h2>

          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}

          <Form onSubmit={handleSubmit}>
            {!formData.isMember && (
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
            )}

            {!formData.isMember && (
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
            )}
            {!formData.isMember && (
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
            )}

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
            {!formData.isMember && (
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
            )}

            {!formData.isMember && (
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
            )}
            {!formData.isMember && (
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
            )}
            {!formData.isMember && (
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
            )}
            {!formData.isMember && (
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
            )}

            <div className="register-buttons">
              <Button
                className="btn text-white mt-3 main-color-signup-btn register-submit"
                variant="primary"
                type="submit"
                disabled={isLoading}
              >
                Submit
              </Button>

              <div className="switcher-container">
                <span className="switcher-text">
                  {formData.isMember
                    ? 'Not a member yet?'
                    : 'Already have an account?'}
                </span>

                <button
                  type="button"
                  onClick={toggleMember}
                  className="switch-reg-btn"
                >
                  {formData.isMember ? 'Register' : 'Login'}
                </button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    </section>
  );
};

export default Register;
