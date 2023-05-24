import { Form } from 'react-bootstrap';

const FormRow = ({label, type, placeholder, name, value, onChange }) => {
  return (
    <Form.Group controlId="formBasicEmail">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      className="custom-input"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  </Form.Group>
  )
}

export default FormRow