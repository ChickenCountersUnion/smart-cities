import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Button, Checkbox, Form, Dropdown } from 'semantic-ui-react'; 

class PickupForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      user: {}, 
      email: '', 
      address: '', 
      phone: '', 
      type: [

      ]
    }
    this.addEmail = this.addEmail.bind(this); 
    this.addPhone = this.addPhone.bind(this);
    this.toggleType = this.toggleType.bind(this); 
    this.sendUser = this.sendUser.bind(this); 
  }

  addEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  addPhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }
  toggleType = (e) => {

  }
  sendUser = () => {
    console.log(this.state); 
  }
  render() {
    return (
      <div id="formbox">
        <Form>
          <Form.Group widths='equal'>
            <Form.Input 
              fluid 
              placeholder='Email' 
              onChange={this.addEmail} 
              value={this.state.email}
              />
            <Form.Input fluid placeholder='Phone' 
            onChange={this.addPhone}
            value={this.state.phone} 
            />
          </Form.Group>
          <Form.Group inline>
            <label>Type</label>
            <Form.Checkbox label="Compost" checked={this.toggleType}/>
            <Form.Checkbox label="Landfill" checked={this.toggleType}/>
            <Form.Checkbox label="Recycle" checked={this.toggleType}/>
          </Form.Group>
  
          <Button fluid 
          onClick={this.sendUser}
          >Submit</Button>
        </Form>
      </div>
    )
  }
  
}


export default PickupForm; 