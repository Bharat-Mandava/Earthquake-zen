import React from "react";
import "./TableElements.css"

export const TableRow = (props) => {
    return (
        <div className="Table-Row">
            {props.children}
        </div>
    )
}
export const TableKey = ({text}) => {
  return <span className="Table-Key" aria-label={text}>{text}</span>;
}

export const TableValue = ({text}) => {
    return <span className="Table-Value" aria-label={text}>{text}</span>;
  }
