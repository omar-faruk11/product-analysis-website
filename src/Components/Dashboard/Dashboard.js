import React from 'react';
import { Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
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
        <div className="container">
            <div className='row row-cols-1 row-cols-md-2 mt-4'>
                <div className="col">
                    <h5 className="text-center text-uppercase text-primary">month wise sell</h5>
                    <LineChart width={450} height={250} data={chartData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    </LineChart>
                </div>
                <div className="col">
                    <h5 className="text-center text-uppercase text-primary">investment vs revenue</h5>
                    <div className="d-flex align-items-center justify-content-center">
                    <div>
                    <PieChart width={730} height={250}>
                        <Pie data={chartData} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={chartData} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    </PieChart>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;