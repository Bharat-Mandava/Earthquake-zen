import React from "react";
import { useLocation } from "react-router-dom";
import SubHeader from "../subHeader/SubHeader";
import { TableKey, TableRow, TableValue } from "../tableElements/TableElements";
import { convertTime } from "../../helpers/helpers";
import { sampleData } from "../../../data";
import "./detail.css";

const Detail = () => {
	const location = useLocation();
	const data = location.feature || sampleData;
	const { title, mag, time, status, tsunami, type } = data?.properties;
	return (
		<div className='details-container'>
			<SubHeader text={title} />
			<div className='sub-container'>
				<TableRow>
					<TableKey text='Title' />
					<TableValue text={title} />
				</TableRow>
				<TableRow>
					<TableKey text='Magnitude' /> <TableValue text={mag} />
				</TableRow>
				<TableRow>
					<TableKey text='Time' /> <TableValue text={`${convertTime(time)}`} />
				</TableRow>
				<TableRow>
					<TableKey text='Status' /> <TableValue text={status} />
				</TableRow>
				<TableRow>
					<TableKey text='Tsunami' /> <TableValue text={tsunami} />
				</TableRow>
				<TableRow>
					<TableKey text='Type' /> <TableValue text={type} />
				</TableRow>
			</div>
		</div>
	);
};

export default Detail;
