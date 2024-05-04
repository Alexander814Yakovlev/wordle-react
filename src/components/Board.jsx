import { Component } from "react";
import "./Board.css";
import BoardRow from "./BoardRow";

class Board extends Component {
  render() {
    return (
      <div className="main__board">
        {[...Array(6)].map((_, id) => (
          <BoardRow {...this.props}
                    id={id + 1}
                    key={`row-${id + 1}`} />
        ))}
      </div>
    );
  }
}

export default Board;
