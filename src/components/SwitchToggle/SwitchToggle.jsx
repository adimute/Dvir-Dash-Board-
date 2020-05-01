import React, { Component } from "react";
import Switch from "react-switch";
 
class SwitchToggle extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
      <label>
        <span style={{ paddingRight: '300px', height: '10px', width: '20px' }}></span>
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          uncheckedIcon={<div></div>}
          checkedIcon={<svg viewBox="0 0 8 8" height="100%" width="50%" />}
          className="react-switch"
          id="icon-switch"
 />
    </label>
    );
  }
}

export default SwitchToggle;
