import { Component } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoardRow from "./BoardRow";
import Button from "./Button";
import "./Rules.css"

class Rules extends Component {
  render() {
    return (
      <div className="info">
        <div className="nav__top">
          <h2 className="nav__header">Привила игры</h2>
          <Button
            content={<FontAwesomeIcon icon={faXmark} />}
            clickButton={this.props.closeRules}
            vibration={this.props.vibration}
          />
        </div>
        <div className="rules">
          <div className="rules__section">
            <p>Угадайте загаданное слово в игре "5букв" с шести попыток.</p>
            <p>
              После каждой попытки цвет букв будет меняться, чтобы показать,
              какие буквы есть в загаданном слове! Например, мы пытаемся
              отгадать слово ГОCТЬ и вводим слово Ребус:
            </p>
          </div>
          <div className="rules__section">
            <BoardRow id={1} activeRow={2} word="гость" enteredWords={["ребус"]} currentWord="гость"/>
            <p>Буква С есть в загаданном слове, но стоит в другом месте.</p>
          </div>
          <div className="rules__section">
            <p>Затем ввели слово Сосна. Буква С и О есть в загаданном слове и стоят на правильных местах.</p>
            <BoardRow id={1} activeRow={2} word="гость" enteredWords={["сосна"]} currentWord="гость"/>
          </div>
          <div className="rules__section">
            <p>Если буквы нет в загаданном слове, то она выделяется серым.</p>
            <BoardRow id={1} activeRow={2} word="гость" enteredWords={["пират"]} currentWord="гость"/>
          </div>
          <div className="rules__section">
            <h3>Какие слова могут быть загаданы?</h3>
            <p>В основном загадываются существительные в единственном числе</p>
          </div>
          <div className="rules__section">
            <h3>Могут ли в загадываемом слове быть одинаковые буквы?</h3>
            <p>Да, в загаданном слове могут быть одинаковые буквы.</p>
          </div>
          <div className="rules__section">
            <h3>Есть ли буква Ё в игре?</h3>
            <p>По правилам русских кроссвордов буква Ё в словах заменена на E!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Rules;
