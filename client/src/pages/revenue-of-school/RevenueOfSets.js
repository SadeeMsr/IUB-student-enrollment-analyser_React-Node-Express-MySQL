import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RevenueOfSets.css"
import DataTable from "../../components/table/DataTable";
import LineChart2 from "../../components/charts/line-chart/LineChart2";
import AreaChart2 from "../../components/charts/area-chart/AreaChart2";
import BarLineChart2 from "../../components/charts/composed-chart/BarLineChart2";
import BarLineChart3 from "../../components/charts/composed-chart/BarLineChart3";

export default function RevenueOfSets() {
const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get("/revenue-of-sets").then((response) => {
        setData(response.data);
    });
  }, []);

  const header = [
    "YearNthSemester",
    "CSE",
    "EEE",
    "PS",
    "SETS",
    "CSE%",
    "EEE%",
    "PS%",
    "SETS%"
  ];

    return (
        <div className="eschool_revenue_pageContainer">

      <div className="erschool_revenue_tblChart_container">
        <div className="esr_table_container">
        <h4>Revenue in Engineering School:</h4>
          <DataTable data={data} header={header}></DataTable>
        </div>
        <div className="erslineChart_container1">
        <h4>Department wise revenue in SETS</h4>
           <LineChart2 data={data}></LineChart2>
        </div>
        <div className="ersAreaChart_container1">
        <h4>Revenue of SETS</h4>
            <AreaChart2 data={data}></AreaChart2>
        </div>
        <div className="ersbarLineChart_container">
        <h4>CSE Revenue and Change %</h4>
           <BarLineChart2 data={data}></BarLineChart2>
        </div>
        <div className="ersbarLineChart_container2">
        <h4>EEE Department</h4>
            <BarLineChart3 data={data}></BarLineChart3>
        </div>
      </div>
    </div>
    )
}
