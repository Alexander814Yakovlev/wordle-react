import { Component } from "react";

class Switch extends Component {
  render() {
    return (
      <label className="switch">
        <input type="checkbox" onChange={this.props.toggleSwitch} checked={this.props.checked}/>
        <span className="slider"></span>
      </label>
    );
  }
}

export default Switch;
