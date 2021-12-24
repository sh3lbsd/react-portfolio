import React from "react";
import styles from "../styles/about.module.css";

function Board() {
  const [player, setPlayer] = React.useState(1);
  const [boardValues, setBoardValues] = React.useState(new Array(9).fill());

  const handleClickSquare = (index) => {
    boardValues[index] = "X";
    setBoardValues(boardValues);
  };

  return (
    <div>
      <h2>Your turn Player {player}!</h2>
      <div
        className={styles.board}
        onClick={function () {
          if (player === 1) {
            setPlayer(2);
          } else {
            setPlayer(1);
          }
        }}
      >
        {boardValues.map((value, index) => (
          <Square
            value={value}
            key={index}
            onClick={() => handleClickSquare(index)}
          />
        ))}
      </div>
    </div>
  );
}

function Square({ value, onClick }) {
  return (
    <div className={styles.square} onClick={onClick}>
      {value}
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Tic Tac Toe Exercise</h1>
      <Board></Board>
    </div>
  );
}
