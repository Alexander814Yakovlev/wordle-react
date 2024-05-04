import { Component } from "react";

class BoardRow extends Component {
  render() {
    const { id, word, enteredWords, activeRow, currentWord } = this.props;
    return (
      <div className="row" id={id}>
        {[...Array(5)].map((_, i) => (
          <div
            className={`board-tile ${
              activeRow > id
                ? currentWord[i] === enteredWords[id - 1][i]
                  ? "green-bg"
                  : currentWord.split("").includes(enteredWords[id - 1][i])
                  ? "yellow-bg"
                  : "gray-bg"
                : ""
            } ${activeRow - id === 1 ? "flip-tile" : ""}`}
            id={`${id}-${i + 1}`}
            key={`${id}-${i + 1}`}
          >
            {id === activeRow
              ? word[i] || ""
              : enteredWords[id - 1]
              ? enteredWords[id - 1][i]
              : ""}
          </div>
        ))}
      </div>
    );
  }
}

export default BoardRow;
