import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const initialState = {
  email: "",
  password: "",
};

const LoginFrom = () => {
  const [login, setLogin] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefalult();
    console.log(login);
  };

  return (
    <div className="login-form">
      <Card className="p-4">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={login.email}
              onChange={handleOnChange}
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={login.password}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <a href="/reset-password">Forgot password?</a>
      </Card>
    </div>
  );
};

export default LoginFrom;
