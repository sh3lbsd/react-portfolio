import React from "react";
import styles from "../styles/about.module.css";

function Board() {
  const [player, setPlayer] = React.useState(1);

  const [squareValue, setSquareValue] = React.useState();
  const [squareValue1, setSquareValue1] = React.useState();
  const [squareValue2, setSquareValue2] = React.useState();
  const [squareValue3, setSquareValue3] = React.useState();
  const [squareValue4, setSquareValue4] = React.useState();
  const [squareValue5, setSquareValue5] = React.useState();
  const [squareValue6, setSquareValue6] = React.useState();
  const [squareValue7, setSquareValue7] = React.useState();
  const [squareValue8, setSquareValue8] = React.useState();

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
        <Square
          value={squareValue}
          onClick={function () {
            setSquareValue("X");
          }}
        ></Square>
        <Square
          value={squareValue1}
          onClick={function () {
            setSquareValue1("X");
          }}
        ></Square>
        <Square
          value={squareValue2}
          onClick={function () {
            setSquareValue2("X");
          }}
        ></Square>
        <Square
          value={squareValue3}
          onClick={function () {
            setSquareValue3("X");
          }}
        ></Square>
        <Square
          value={squareValue4}
          onClick={function () {
            setSquareValue4("X");
          }}
        ></Square>
        <Square value={5}></Square>
        <Square value={6}></Square>
        <Square value={7}></Square>
        <Square value={8}></Square>
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
