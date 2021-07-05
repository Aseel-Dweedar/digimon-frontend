import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class UpdateForm extends Component {
  render() {
    return (
      <Form onSubmit={(e) => this.props.updateData(e)} style={{ margin: "30px", width: "600px", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>new name</Form.Label>
          <Form.Control type="text" onChange={(e) => this.props.setName(e)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>new img</Form.Label>
          <Form.Control type="text" onChange={(e) => this.props.setImg(e)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>new level</Form.Label>
          <Form.Control type="text" onChange={(e) => this.props.setLevel(e)} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default UpdateForm;
