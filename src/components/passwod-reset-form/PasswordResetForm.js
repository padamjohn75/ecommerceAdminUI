import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./passwordResestForm.style.css";

export const PasswordResetForm = () => {
  const [email, setEmail] = useState();

  const handleOnChange = (e) => {
    const { value } = e.target;

    setEmail({
      ...email,
      email: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefalult();
    console.log(email);
  };

  return (
    <div className="password-reset-page bg-dark">
      <Card className="p-4">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleOnChange}
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <a href="/">Login</a>
      </Card>
    </div>
  );
};
