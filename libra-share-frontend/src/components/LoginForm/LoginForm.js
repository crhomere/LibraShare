import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Form, Button } from 'react-bootstrap';



const LoginForm = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };
    const response = await fetch(
      'http://localhost:8080/users/login',
      requestOptions
    );
    if (response.ok) {
      const userData = await response.json();
      console.log('User data updated:', userData);

      document.cookie = `sessionId=${userData[0]};path=/`;
      console.log(`/dashboard/${userData[0]}`);
      navigate(`/dashboard/${userData[0]}`);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='form-container-login'>
      <Container
        className="my-5 py-3 "
        style={{
          maxWidth: '400px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
        }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button
            className="btn text-white mt-3 main-color-login-btn"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginForm;
