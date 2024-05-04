import { Component } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Settings.css";
import Button from "./Button";
import Switch from "./Switch";

class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <div className="nav__top">
          <h2 className="nav__header">Настройки</h2>
          <Button
            content={<FontAwesomeIcon icon={faXmark} />}
            clickButton={this.props.closeSettings}
            vibration={this.props.vibration}
          />
        </div>
        <div className="settings__list">
            <div className="settings__item">
                <p>Вибрация</p>
                <Switch toggleSwitch={this.props.toggleVibration} checked={this.props.vibration}/>
            </div>
            <div className="settings__item">
                <p>Темная тема</p>
                <Switch toggleSwitch={this.props.toggleTheme} checked={this.props.darkTheme}/>
            </div>
        </div>
      </div>
    );
  }
}

export default Settings;
