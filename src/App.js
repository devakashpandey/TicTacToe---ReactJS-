import React, { useState } from "react";
import "./App.css";
import NineBoxes from "./components/NineBoxes";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {
  const winCond = [
    // WINNING CONDITIONS
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let [nineBoxes, setNineBoxes] = useState(Array(9).fill(null)); // MAKING EMPTY BOXES
  let [xPlaying, isXPlaying] = useState(true); // TO KNOW WHO IS PLAYING
  let [score, setScore] = useState({ xScore: 0, oScore: 0 }); // FOR SCORE
  let [gameOver, setGameOver] = useState(false); // FOR GAME OVER AND RESET THE VALUE

  // BY CLICKING WHICH VALUE IS PRINT IN BOX
  let handleBoxInput = (boxIdx) => {
    let updatedBox = nineBoxes.map((currEle, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return currEle;
      }
    });

    const winner = findingWinner(updatedBox); // TO INCREASING THE WIINING VALUE BY 1 F SOMEONE WIN

    if (winner) {
      // IF X WINS
      if (winner === "X") {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      } else {
        // IF O WINS
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      }
    }

    setNineBoxes(updatedBox);
    isXPlaying(!xPlaying);
  };

  // FOR FINDING THE WINNER
  let findingWinner = (nineBoxes) => {
    for (let i = 0; i < winCond.length; i++) {
      const [x, y, z] = winCond[i];

      if (
        nineBoxes[x] &&
        nineBoxes[x] === nineBoxes[y] &&
        nineBoxes[y] === nineBoxes[z]
      ) {
        setGameOver(true);
        return nineBoxes[x];
      }
    }
  };

  // TO RESET THE BOXES
  const resetBox = () => {
    setGameOver(false);
    setNineBoxes(Array(9).fill(null));
  };

  // TO RESET THE ALL VALUE AND RESTART THE GAME
  const restrtBox = () => {
    setScore({ xScore: 0, oScore: 0 });
    setNineBoxes(Array(9).fill(null));
  };

  return (
    <>
      <center>
        <h1 className="title">TIC TAC TOE</h1>
      </center>
      <ScoreBoard score={score} xPlaying={xPlaying} />
      <NineBoxes
        nineBox={nineBoxes}
        onClick={gameOver ? resetBox : handleBoxInput}
      />
      <div>
        <button className="clear-btn" onClick={resetBox}>
          CLEAR
        </button>
        <button className="restrt-btn" onClick={restrtBox}>
          RESTART
        </button>
      </div>
      <div class="custom-shape-divider-bottom-1678561814">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default App;
