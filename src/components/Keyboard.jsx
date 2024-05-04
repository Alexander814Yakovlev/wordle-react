import { Component } from "react";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons/faDeleteLeft";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import "./Keyboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Keyboard extends Component {
  keys = ["йцукенгшщзхъ", "фывапролджэ", "⌫ячсмитьбю✔"];
  
  render() {
    const { preciseLetters, rightLetters, wrongLetters } = this.props;
    return (
      <div className="keyboard">
        {this.keys.map((row, i) => (
          <div key={`row-${i + 1}`} className="keyboard-row">
            {row.split("").map((sign) => (
              <div
                className={`keyboard-tile ${
                  preciseLetters.includes(sign)
                    ? "green-bg"
                    : rightLetters.includes(sign)
                    ? "yellow-bg"
                    : wrongLetters.includes(sign)
                    ? "gray-bg"
                    : ""
                }`}
                key={`key-${sign.charCodeAt(0)}`}
                id={
                  sign.charCodeAt(0) === 9003
                    ? "backspace"
                    : sign.charCodeAt(0) === 10004
                    ? "enter"
                    : sign.charCodeAt(0)
                }
                onClick={() =>
                  this.props.keyPress(
                    sign.charCodeAt(0) === 9003
                      ? "backspace"
                      : sign.charCodeAt(0) === 10004
                      ? "enter"
                      : sign.charCodeAt(0)
                  )
                }
              >
                {sign === "⌫" ? (
                  <FontAwesomeIcon icon={faDeleteLeft} />
                ) : sign === "✔" ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  sign
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Keyboard;
