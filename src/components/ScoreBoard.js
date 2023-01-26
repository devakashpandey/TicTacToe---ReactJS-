import React, { useEffect } from 'react'
import "./ScoreBoard.css"

function ScoreBoard({score , xPlaying}) {
 
 let {xScore , oScore} = score;

  return (
    
   <>
   <div className='sBoard'>
     <span className={`score x-score ${!xPlaying && "inactive"} `}>X - {xScore}</span>
     <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    
    </div>
   </>
   
  )
}

export default ScoreBoard;
