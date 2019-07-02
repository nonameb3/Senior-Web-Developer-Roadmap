import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './Profile.css';

export default function Profile({onModelToggle}) {
  return (
    <div className="profile-model ">
      <Form className="p-3 mb-2 bg-white text-dark">
      <button type="button" class="close" aria-label="Close" onClick={onModelToggle}>
        <span aria-hidden="true">&times;</span>
      </button>
      <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="name" name="name" id="formName" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="formEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="formPassword" placeholder="password placeholder" />
        </FormGroup>
        <button className="btn btn-primary">click me!</button>
        <button className="btn btn-secondary ml-5" onClick={onModelToggle}>click me!</button>
      </Form>
    </div>
  )
}
