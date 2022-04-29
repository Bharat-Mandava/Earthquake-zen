import React from 'react';
import { useLocation } from "react-router-dom";
import SubHeader from '../subHeader/SubHeader';
import { TableKey, TableRow, TableValue } from '../tableElements/TableElements';
import { convertTime } from "../../helpers/helpers";
import "./Detail.css"

const Detail = () => {
    const location = useLocation();
    const data = location.feature || {
        "type": "Feature",
        "properties": {
            "mag": 1.19,
            "place": "3km ENE of The Geysers, CA",
            "time": 1523647508250,
            "updated": 1523648041843,
            "tz": -480,
            "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc72999021",
            "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc72999021.geojson",
            "felt": null,
            "cdi": null,
            "mmi": null,
            "alert": null,
            "status": "automatic",
            "tsunami": 0,
            "sig": 22,
            "net": "nc",
            "code": "72999021",
            "ids": ",nc72999021,",
            "sources": ",nc,",
            "types": ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
            "nst": 12,
            "dmin": 0.008595,
            "rms": 0.04,
            "gap": 68,
            "magType": "md",
            "type": "earthquake",
            "title": "M 1.2 - 3km ENE of The Geysers, CA"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -122.7304993,
                38.7903328,
                1.22
            ]
        },
        "id": "nc72999021"
    };    
    const {title, mag, time, status, tsunami, type} = data?.properties
    return (
        <div className = "Details-Container">
            <SubHeader text={title} />
            <div className="Sub-Container">
                <TableRow>
                    <TableKey text="Title" />
                    <TableValue text={title} />
                </TableRow>
                <TableRow>
                    <TableKey text="Magnitude" /> <TableValue text={mag} />
                </TableRow>
                <TableRow>
                    <TableKey text="Time" />  <TableValue text={`${convertTime(time)}`}/>
                </TableRow>
                <TableRow>
                    <TableKey text="Status" />  <TableValue text={status} />
                </TableRow>
                <TableRow>
                    <TableKey text="Tsunami" />  <TableValue text={tsunami} />
                </TableRow>
                <TableRow>
                    <TableKey text="Type" />  <TableValue text={type} />
                </TableRow>
            </div>
        </div>
    );
}

export default Detail;
