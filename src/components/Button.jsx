import { Component } from "react";

class Button extends Component {
  clickButton = () => {
    this.props.clickButton();
    if (this.props.vibration) {
      navigator.vibrate(80);
    }
  };
  render() {
    return (
      <div>
        <button className="btn" onClick={this.clickButton}>
          {this.props.content}
        </button>
      </div>
    );
  }
}

export default Button;
