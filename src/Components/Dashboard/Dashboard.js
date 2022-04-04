import React from 'react';
import {Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
// import { useEffect, useState } from 'react';
// import LineChart from '../Charts/LineChart';

const Dashboard = () => {
    // const [chartData,setChartData] = useState([])
    // useEffect(() =>{
    //     fetch('ChartData.json')
    //     .then(res => res.json())
    //     .then(data => setChartData(data))
    // },[])
    // console.log(chartData)
    const chartData = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='row row-cols-1 row-cols-md-2'>
            <div className="col">
                <LineChart width={730} height={250} data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                </LineChart>

            </div>
        </div>
    );
};

export default Dashboard;