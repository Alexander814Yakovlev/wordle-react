import { Component } from "react";
import "./Modal.css";

class Modal extends Component {

  componentDidMount = () => {
    document.removeEventListener("keyup", this.props.keyboardPressHandler);
  }

  componentWillUnmount = () => {
    document.addEventListener("keyup", this.props.keyboardPressHandler);
  }

  render() {
    const { isWin, isLoose, isError, word, currentWord, definition } =
      this.props;
    return (
      <div
        className={`modal ${isWin || isError || isLoose ? "modal-active" : ""}`}
      >
        <div className="modal__inner">
          <h3 className="modal__header">
            {isWin ? "Вы выиграли!" : isLoose ? "Вы проиграли!" : "Ошибка!"}
          </h3>
          {isWin || isLoose ? (
            <div className="modal__info">
              <h4 className="modal__theWord">{currentWord}</h4>
              <ul className="modal__definition">
              {definition.map((def, i) => (
                def.length ?
                <li key={`${currentWord}-${i}`} >{def}</li>
                : ''
              ))}
              </ul>
            </div>
          ) : (
            <div className="modal__info">
              <p>Слова {word} нет в словаре</p>
            </div>
          )}
          {isWin || isLoose ? (
            <button className="modal__button" onClick={this.props.startNewGame}>
              Навая игра
            </button>
          ) : isError ? (
            <button className="modal__button" onClick={this.props.handleNotInDictonary}>
              Ok
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Modal;
