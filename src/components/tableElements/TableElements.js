import React from "react";
import "./tableElements.css";

export const TableRow = (props) => {
	return <div className='table-row'>{props.children}</div>;
};

export const TableKey = ({ text }) => {
	return (
		<span className='table-key' aria-label={text}>
			{text}
		</span>
	);
};

export const TableValue = ({ text }) => {
	return (
		<span className='table-value' aria-label={text}>
			{text}
		</span>
	);
};
