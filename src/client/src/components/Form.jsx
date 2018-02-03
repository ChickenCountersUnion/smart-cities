import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Button, Checkbox, Form } from 'semantic-ui-react'; 

const Form = () => {
  <Form>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Street Address</label>
      <input placeholder='Street Address' />
    </Form.Field>
    <Form.Field>
      <label>City</label>
      <input placeholder='City' />
    </Form.Field>
    <Form.Field>
      <label>Zip Code</label>
      <input placeholder='Zip Code' />
    </Form.Field>
  </Form>
}


export default Form; 