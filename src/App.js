import "./App.css"
import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  function handleClicked(){
    setValue('X');
  }
  return (
    <button
     className="square"
     onClick={handleClicked}
    > 
      {value}
    </button>);
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}
