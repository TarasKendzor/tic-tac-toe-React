import React from "react";

function Cell(props) {
  const { value, onDivClicked , Getstyle } = props;
  return (
    <div data-style = {Getstyle} className="board-cell" onClick={onDivClicked}>
      {value}
    </div>
  );
}

export default Cell;