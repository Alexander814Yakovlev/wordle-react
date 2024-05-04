import { Component } from "react";
import Header from "./Header";
import Board from "./Board";
import Keyboard from "./Keyboard";
import Modal from "./Modal";

class Main extends Component {
  state = {
    word: "",
  };

  keyPress = (id) => {
    const cell = this.props.activeCell;
    if (id === "enter") {
      if (this.state.word.length === 5) {
        if (this.props.checkWord(this.state.word)) {
          this.props.addEnteredWord(this.state.word);
          this.props.checkLetters(this.state.word);
          this.props.goToNextRow();
          this.setState({ word: "" });
          if (this.state.word === this.props.currentWord.name) {
            this.props.winGame();
          }
          if (
            this.props.activeRow === 6 &&
            this.state.word !== this.props.currentWord.name
          ) {
            this.props.looseGame();
          }
        } else {
          this.props.notInDictonary();
        }
      }
    } else if (id === "backspace") {
      this.props.goToPrevTile();
      this.setState({
        word: this.state.word.slice(0, this.state.word.length - 1),
      });
    } else if (cell < 6) {
      this.setState({ word: this.state.word + String.fromCharCode(id) });
      this.props.goToNextTile();
    }
    if (this.props.vibration) {
      navigator.vibrate(80);
    }
  };

  keyboardPressHandler = (e) => {
    const keyCodes = {
      KeyQ: "й",
      KeyW: "ц",
      KeyE: "у",
      KeyR: "к",
      KeyT: "е",
      KeyY: "н",
      KeyU: "г",
      KeyI: "ш",
      KeyO: "щ",
      KeyP: "з",
      BracketLeft: "х",
      BracketRight: "ъ",
      KeyA: "ф",
      KeyS: "ы",
      KeyD: "в",
      KeyF: "а",
      KeyG: "п",
      KeyH: "р",
      KeyJ: "о",
      KeyK: "л",
      KeyL: "д",
      Semicolon: "ж",
      Quote: "э",
      KeyZ: "я",
      KeyX: "ч",
      KeyC: "с",
      KeyV: "м",
      KeyB: "и",
      KeyN: "т",
      KeyM: "ь",
      Comma: "б",
      Period: "ю",
    };
    if (e.code in keyCodes) {
      this.keyPress(keyCodes[e.code].charCodeAt(0));
    } else if (e.code === "Enter") {
      this.keyPress("enter");
    } else if (e.code === "Backspace") {
      e.preventDefault();
      this.keyPress("backspace");
    }
  };

  componentDidMount = () => {
    document.addEventListener("keyup", this.keyboardPressHandler);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keyup", this.keyboardPressHandler);
  };

  render() {
    const { word } = this.state;
    return (
      <div className="main">
        <Header
          name={this.props.appName}
          vibration={this.props.vibration}
          openStats={this.props.openStats}
          openSettings={this.props.openSettings}
          openRules={this.props.openRules}
        />
        <Board
          word={word}
          currentWord={this.props.currentWord.name}
          activeRow={this.props.activeRow}
          enteredWords={this.props.enteredWords}
        />
        <Keyboard
          currentWord={this.props.currentWord.name}
          enteredWords={this.props.enteredWords}
          preciseLetters={this.props.preciseLetters}
          rightLetters={this.props.rightLetters}
          wrongLetters={this.props.wrongLetters}
          keyPress={this.keyPress}
        />
        <Modal
          word={word}
          isError={this.props.isError}
          isWin={this.props.isWin}
          isLoose={this.props.isLoose}
          currentWord={this.props.currentWord.original_name}
          definition={this.props.currentWord.definitions}
          startNewGame={this.props.startNewGame}
          handleNotInDictonary={this.props.handleNotInDictonary}
          keyboardPressHandler={this.keyboardPressHandler}
        />
      </div>
    );
  }
}
export default Main;
