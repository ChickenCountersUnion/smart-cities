import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Input, Menu, Segment } from 'semantic-ui-react'; 
import About from './About'; 
import Map from './Map'; 
import PickupForm from './PickupForm'; 


class HeaderMenu extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { 
      activeItem: 'order'
    }
  }
  liveRender = () => {
    let name = this.state.activeItem
    if (name === 'order') {
      return (
        <div id="input-fields">
        <PickupForm />
        </div>
      )
    } else if (name === 'routes') {
      return (
        <div id="input-fields">
          <Map />
        </div>
      )
    } else {
      return (
        <div id="input-fields">
          <About />
        </div>
      )
      
    } 
  }
    
  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }
  

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu pointing>
          <Menu.Item header> good kid, t.r.a.s.h city</Menu.Item>
          <Menu.Item name='order' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='routes' active={activeItem === 'placeholder'} onClick={this.handleItemClick} />
          <Menu.Item name='about' active={activeItem === 'placeholder2'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            
          </Menu.Menu>
        </Menu>
        <Segment>
          {this.liveRender()}
        </Segment>

      </div>
    )
  }
}


export default HeaderMenu; 