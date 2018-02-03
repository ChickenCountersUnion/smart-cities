import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Button, Checkbox, Form, Dropdown } from 'semantic-ui-react'; 

const PickupForm = () => {
  const handleChange = () => {

  }
  const trashOptions = [
    {
      text: 'Compost', 
      key: 'compost'
    }, 
    {
      text: 'Landfill',
      key: 'landfill'
    }, 
    {
      text: 'Recycle',
      key: 'recycle'
    }, 
  ]
  return (
    <div id="formbox">
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid placeholder='Email' />
          <Form.Input fluid placeholder='Phone No.' />
        </Form.Group>
        <Dropdown placeholder='Trash type' search selection options={trashOptions} input={{fluid: true}}/>
      </Form>
    </div>
  ); 
}


export default PickupForm; 