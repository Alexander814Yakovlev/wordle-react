import { Component } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

class Header extends Component {
  render() {
    return (
      <div className="nav__top">
        <div className="buttons">
          <Button
            content={<FontAwesomeIcon icon={faChartSimple} />}
            clickButton={this.props.openStats}
            vibration={this.props.vibration}
          />
        </div>
        <div className="logo">
          {this.props.name.split("").map((sign) => (
            <div
              key={`${sign}-tile`}
              className="small-tile bg-accent color-accent"
            >
              {sign}
            </div>
          ))}
        </div>
        <div className="buttons">
          <Button
            content={<FontAwesomeIcon icon={faInfoCircle} />}
            clickButton={this.props.openRules}
            vibration={this.props.vibration}
          />
          <Button
            content={<FontAwesomeIcon icon={faGear} />}
            clickButton={this.props.openSettings}
            vibration={this.props.vibration}
          />
        </div>
      </div>
    );
  }
}

export default Header;
