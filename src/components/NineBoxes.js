import React from "react";
import "./NineBoxes.css";
import Box from "./Box";

function NineBoxes({ nineBox, onClick }) {
  return (
    <>
      <div className="boxes">
        {nineBox.map((currEle, idx) => {
          return (
            <Box
              value={currEle}
              onClick={() => currEle === null && onClick(idx)}
            />
          ); // MAP TO LOOPING THE BOXES 9 TIMES
        })}
      </div>
    </>
  );
}

export default NineBoxes;
