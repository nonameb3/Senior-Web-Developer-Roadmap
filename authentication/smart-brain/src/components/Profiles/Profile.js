import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './Profile.css';

export default function Profile(props) {
  console.log(props)
  const { onModelToggle, loadUser, user } = props;
  const [userName, setUserName] = useState(user.name);

  const onProfileUpdate = data => {
    fetch(`http://localhost:3000/profile/${user.id}`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          formInput:{...user, ...data}
        })
      })
      .then(() => {
        onModelToggle();
        loadUser({...props.user, ...data});
      })
      .catch(
        console.log
      );
  }

  return (
    <div className="profile-model ">
      <Form className="p-3 mb-2 bg-white text-dark" onClick={e => e.preventDefault()}>
      <label>Dear: {userName}</label>
      <button type="button" className="close" aria-label="Close" onClick={onModelToggle}>
        <span aria-hidden="true">&times;</span>
      </button>
      <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input 
            type="name" 
            name="name" 
            id="formName" 
            placeholder={user.name}
            onChange={e => setUserName(e.target.value)}  
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input 
            type="email" 
            name="email" 
            id="formEmail" 
            placeholder="with a placeholder" 
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input 
            type="password" 
            name="password" 
            id="formPassword" 
            placeholder="password placeholder" 
          />
        </FormGroup>
        <button className="btn btn-primary" onClick={() => onProfileUpdate({name: userName})}>Submit</button>
        <button className="btn btn-secondary ml-5" onClick={onModelToggle}>Cancel</button>
      </Form>
    </div>
  )
}
