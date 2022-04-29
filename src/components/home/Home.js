import React, {useState} from "react";
import { Link } from "react-router-dom";
import SubHeader from "../subHeader/SubHeader";
import { convertTime } from "../../helpers/helpers";
import { featuresUnSorted } from "../../../data";
import "./Home.css"

const {title} =  {
      "generated": 1523648330000,
      "url": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
      "title": "USGS All Earthquakes, Past Hour",
      "status": 200,
      "api": "1.5.8",
      "count": 9
    }


const tableHeads = ['Title', 'Magnitude', 'Time'];

export default function Home() {

    const [features, setFeatures] = useState(featuresUnSorted);
    const [sortingDirection, setSortingDirection] = useState('unsorted')
    const sortColumn = (columnHead) => {
        const sortedFeatures = [
            ...features
        ];
        const keyMap = {
            "Title": "place",
            "Magnitude": "mag",
            "Time": "time"
        }
        sortedFeatures.sort((a,b)=>{
            const propA = a.properties[keyMap[columnHead]];
            const propB = b.properties[keyMap[columnHead]];
            console.log(propA, propB)

            if(sortingDirection === "unsorted" || sortingDirection === "ascending") {
                if(propA < propB) return -1;
                if(propA > propB) return 1;
            }
            else{
                if(propA > propB) return -1;
                if(propA < propB) return 1;
            }
            return 0;
        })
        setFeatures(sortedFeatures)
        sortingDirection === "unsorted" || sortingDirection === "ascending" ? setSortingDirection("descending") : setSortingDirection("ascending");
    }
    
  return(
    <div className= "Home-Container">
        <SubHeader text={title} />
        <div className="Features-Container">
            <table>
                <thead>
                    <tr>
                        {tableHeads.map((columnHead,index)=>{
                            return(
                                <th className="Table-Heads" key={index} onClick={()=> sortColumn(columnHead)}>
                                    {columnHead}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, index) => {
                        return(
                        <tr className="Feature-Table-Row" key={index}>
                            <td>
                                <Link to={{pathname: "/detail", feature}}>
                                    {feature.properties.place}
                                </Link>
                            </td>
                            <td>
                                {feature.properties.mag}
                            </td>
                            <td>
                                {`${convertTime(feature.properties.time)}`}
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>

  )

}
