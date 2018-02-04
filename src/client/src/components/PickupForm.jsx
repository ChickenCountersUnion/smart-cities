import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Button, Checkbox, Form, Dropdown } from 'semantic-ui-react';import SearchInput from './SearchInput'; 

class PickupForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      user: {}, 
      email: '', 
      address: '', 
      phone: '', 
      type: [],
      address: {}, 


    }
    this.addEmail = this.addEmail.bind(this); 
    this.addPhone = this.addPhone.bind(this);
    this.toggleType = this.toggleType.bind(this); 
    this.sendUser = this.sendUser.bind(this); 
    this.handleResultSelect = this.handleResultSelect.bind(this);
  }

  handleResultSelect = (e, { result }) => {
    let address = {
      title: result.title, 
      lat: result.lat, 
      lon: result.lon
    }; 
    this.setState({
       address
    })

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
    let type = this.state.type.slice();
    type.push(e.target.value)
    this.setState({
      type
    })
  }
  sendUser = () => {
    console.log(this.state); 
  }
  render() {
    const { value } = this.state.type
    return (
      <div id="formbox">
      <SearchInput 
      handleResultSelect={this.handleResultSelect} 
      />
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
            <Form.Checkbox label="Compost" value="compost"
            control="input"
            type="checkbox"
            onChange={this.toggleType}
            />
            <Form.Checkbox label="Landfill" value="landfill"
            control="input"
            type="checkbox"
            onChange={this.toggleType}
            />
            <Form.Checkbox label="Recycle" value="recycle"
            control="input"
            type="checkbox"
            onChange={this.toggleType}
            />
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