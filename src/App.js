import React, { useState } from 'react';
import "./App.css";
import NineBoxes from './components/NineBoxes';
import ScoreBoard from './components/ScoreBoard';

const App = () => {

  const winCond = [ // WINNING CONDITIONS
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  let [nineBoxes, setNineBoxes] = useState(Array(9).fill(null)) // MAKING EMPTY BOXES
  let [xPlaying , isXPlaying] = useState(true) // TO KNOW WHO IS PLAYING
  let [score , setScore] = useState({xScore:0, oScore:0})  // FOR SCORE
  let [gameOver , setGameOver] = useState(false)  // FOR GAME OVER AND RESET THE VALUE
  
// BY CLICKING WHICH VALUE IS PRINT IN BOX
  let handleBoxInput = (boxIdx) =>{
     let updatedBox = nineBoxes.map((currEle, idx)=>{
       if(idx === boxIdx){
         return xPlaying ? "X" : "O"
       }else{
          return currEle;
       }
     })
     
     const winner =  findingWinner(updatedBox);  // TO INCREASING THE WIINING VALUE BY 1 F SOMEONE WIN
  
     if(winner){  // IF X WINS
       if(winner === "X"){
        let {xScore} = score
        xScore += 1
        setScore({...score, xScore})
          
       }else{  // IF O WINS
         let {oScore} = score;
         oScore += 1;
         setScore({...score, oScore})
       }
     }

     setNineBoxes(updatedBox);
     isXPlaying(!xPlaying)
  }

// FOR FINDING THE WINNER 
  let findingWinner = (nineBoxes) =>{
    for(let i = 0; i < winCond.length ; i++){
      const [x,y,z] = winCond[i]
   
    if(nineBoxes[x] && nineBoxes[x] === nineBoxes[y] && nineBoxes[y] === nineBoxes[z]){
       setGameOver(true)
      return nineBoxes[x]
    }
   }
  }

  // TO RESET THE BOXES
  const resetBox = () =>{
    setGameOver(false)
    setNineBoxes(Array(9).fill(null))
  }
 
  // TO RESET THE ALL VALUE AND RESTART THE GAME
  const restrtBox = () =>{
     setScore({xScore:0, oScore:0})
     setNineBoxes(Array(9).fill(null))
  }

  return (
    
    <>
    <center><h1>TIC TAC TOE</h1></center>
    <ScoreBoard score={score} xPlaying= {xPlaying} />
    <NineBoxes nineBox={nineBoxes} onClick={gameOver ? resetBox : handleBoxInput} />
    <button className='clear-btn' onClick={resetBox}>CLEAR</button>
    <button className='restrt-btn' onClick={restrtBox}>RESTART</button>
    
    </>

  )
}

export default App;

