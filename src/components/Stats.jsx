import { Component } from "react";
import "./Stats.css"
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faMedal } from "@fortawesome/free-solid-svg-icons/faMedal";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons/faThumbsDown";
import { faPercent } from "@fortawesome/free-solid-svg-icons/faPercent";
import { faGamepad } from "@fortawesome/free-solid-svg-icons/faGamepad";

class Stats extends Component {
  render() {
    const { totalWins, totalLooses, totalGames, winPercent } = this.props;
    const cards = [
      [faMedal, "Побед", totalWins, "win"],
      [faThumbsDown, "Проигрышей", totalLooses, "loose"],
      [faPercent, "Процент побед", winPercent, "percent"],
      [faGamepad, "Всего игр", totalGames, "games"],
    ];
    return (
      <div className="stats">
        <div className="nav__top">
          <h2 className="nav__header">Статистика</h2>
          <Button
            content={<FontAwesomeIcon icon={faXmark} />}
            clickButton={this.props.closeStats}
            vibration={this.props.vibration}
          />
        </div>
        <div className="stats__info">
          {cards.map(([icon, text, num, key]) => (
            <div className="stats__tile" key={key}>
              <div className="stats__tile_icon">
                <FontAwesomeIcon icon={icon} />
              </div>
              <div className="stats-title">{text}</div>
              <div className="stats-info">{num}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Stats;
