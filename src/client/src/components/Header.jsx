import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Input, Menu, Segment } from 'semantic-ui-react'; 
import SearchInput from './SearchInput'; 
import PickupForm from './PickupForm'; 


class HeaderMenu extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { 
      activeItem: 'home'
    }
  }
  liveRender = () => {
    let name = this.state.activeItem
    console.log(name); 

    if (name === 'home') {
      return (
        <div id="input-fields">
        <SearchInput/>
        <PickupForm/>
        </div>
      )
    } else {
      return (
        name
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
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='placeholder' active={activeItem === 'placeholder'} onClick={this.handleItemClick} />
          <Menu.Item name='placeholder2' active={activeItem === 'placeholder2'} onClick={this.handleItemClick} />
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