import "./App.css";
import { Component } from "react";
import Main from "./components/Main";
import words from "./dictonary/5-letters_words(3354).json";
import Settings from "./components/Settings";
import Stats from "./components/Stats";
import Rules from "./components/Rules";

class App extends Component {
  state = {
    appName: "5букв",
    main: true,
    settings: false,
    stats: false,
    rules: false,
    darkTheme: false,
    vibration: true,
    totalGames: 0,
    totalWins: 0,
    totalLooses: 0,
    winPercent: 0,
    activeRow: 1,
    activeCell: 1,
    currentWord: "",
    enteredWords: [],
    preciseLetters: [],
    rightLetters: [],
    wrongLetters: [],
    isWin: false,
    isLoose: false,
    isError: false,
  };

  pickRandomWord = (data) => {
    const index = Math.floor(Math.random() * data.length);
    return data[index];
  };

  startNewGame = () => {
    this.setState({
      currentWord: this.pickRandomWord(words),
      activeRow: 1,
      activeCell: 1,
      enteredWords: [],
      preciseLetters: [],
      rightLetters: [],
      wrongLetters: [],
      isWin: false,
      isLoose: false,
      isError: false,
    });
  };

  openSettings = () => {
    this.setState({ main: false, settings: true });
  };

  closeSettings = () => {
    this.setState({ main: true, settings: false });
  };
  openStats = () => {
    this.setState({ main: false, stats: true });
  };

  closeStats = () => {
    this.setState({ main: true, stats: false });
  };
  openRules = () => {
    this.setState({ main: false, rules: true });
  };

  closeRules = () => {
    this.setState({ main: true, rules: false });
  };

  toggleVibration = () => {
    this.setState({ vibration: !this.state.vibration });
  };

  toggleTheme = () => {
    this.setState({ darkTheme: !this.state.darkTheme, activeCell: 1 });
  };

  goToNextTile = () => {
    if (this.state.activeRow < 7) {
      if (this.state.activeCell < 6) {
        this.setState({ activeCell: this.state.activeCell + 1 });
      }
    }
  };

  goToPrevTile = () => {
    if (this.state.activeCell > 1) {
      this.setState({ activeCell: this.state.activeCell - 1 });
    }
  };

  goToNextRow = () => {
    this.setState({ activeRow: this.state.activeRow + 1, activeCell: 1 });
  };

  addEnteredWord = (word) => {
    this.setState({ enteredWords: this.state.enteredWords.concat([word]) });
  };

  checkLetters = (word) => {
    for (let i = 0; i < word.length; i++) {
      var letters;
      if (this.state.currentWord.name[i] === word[i]) {
        letters = this.state.preciseLetters;
        letters.push(word[i]);
        this.setState({
          preciseLetters: letters,
        });
      } else if (this.state.currentWord.name.split("").includes(word[i])) {
        letters = this.state.rightLetters;
        letters.push(word[i]);
        this.setState({
          rightLetters: letters,
        });
      } else {
        letters = this.state.wrongLetters;
        letters.push(word[i]);
        this.setState({
          wrongLetters: letters,
        });
      }
    }
  };

  checkWord = (word) => {
    const allWords = words.map((word) => word.name);
    return allWords.includes(word);
  };

  winGame = () => {
    this.setState({
      isWin: true,
      totalGames: this.state.totalGames + 1,
      totalWins: this.state.totalWins + 1,
      winPercent: Math.floor(
        ((this.state.totalWins + 1) / (this.state.totalGames + 1)) * 100
      ),
    });
  };

  looseGame = () => {
    this.setState({
      isLoose: true,
      totalGames: this.state.totalGames + 1,
      totalLooses: this.state.totalLooses + 1,
      winPercent: Math.floor(
        ((this.state.totalWins + 1) / (this.state.totalGames + 1)) * 100
      ),
    });
  };

  notInDictonary = () => {
    this.setState({ isError: true });
  };

  handleNotInDictonary = () => {
    this.setState({ isError: false });
  };

  componentDidMount = () => {
    if (!localStorage.reactWordle) {
      this.startNewGame();
    } else {
      this.setState(JSON.parse(localStorage.reactWordle));
      this.setState({ activeCell: 1 });
    }
  };

  componentDidUpdate = () => {
    localStorage.reactWordle = JSON.stringify(this.state);
  };

  render() {
    const {
      main,
      settings,
      stats,
      rules,
      darkTheme,
      vibration,
      totalGames,
      totalWins,
      totalLooses,
      winPercent,
    } = this.state;
    return (
      <div className="app" data-theme={darkTheme ? "dark" : "light"}>
        {main ? (
          <Main
            {...this.state}
            openStats={this.openStats}
            openSettings={this.openSettings}
            openRules={this.openRules}
            goToNextTile={this.goToNextTile}
            goToPrevTile={this.goToPrevTile}
            goToNextRow={this.goToNextRow}
            addEnteredWord={this.addEnteredWord}
            checkLetters={this.checkLetters}
            checkWord={this.checkWord}
            startNewGame={this.startNewGame}
            winGame={this.winGame}
            looseGame={this.looseGame}
            notInDictonary={this.notInDictonary}
            handleNotInDictonary={this.handleNotInDictonary}
          />
        ) : (
          ""
        )}
        {settings ? (
          <Settings
            closeSettings={this.closeSettings}
            toggleVibration={this.toggleVibration}
            vibration={vibration}
            toggleTheme={this.toggleTheme}
            darkTheme={darkTheme}
          />
        ) : (
          ""
        )}
        {stats ? (
          <Stats
            closeStats={this.closeStats}
            totalGames={totalGames}
            totalWins={totalWins}
            totalLooses={totalLooses}
            winPercent={winPercent}
          />
        ) : (
          ""
        )}
        {rules ? (
          <Rules closeRules={this.closeRules}/>
        ) : ""}
      </div>
    );
  }
}

export default App;
