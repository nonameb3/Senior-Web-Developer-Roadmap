import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

const style = {
  marginTop: '20px'
}

export class ProfileIcon extends Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div class="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src="http://tachyons.io/img/logo.jpg"
              class="br-100 ba h3 w3 dib" alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu className="b--transparent shadow-5" style={style}>
            <div onClick={this.toggle}>View Profile</div>
            <div onClick={this.toggle}>Sign Out</div>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
