import React from 'react'
import './ChartBox.css'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

// type Props = {
//   color: string;
//   icon: string;
//   title: string;
//   dataKey: string;
//   number: number | string;
//   percentage: number;
//   chartData: object[];
// };
export default function ChartBox(props) {

  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="chartTitle">
          <img src={props.icon} alt='X' />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>View all</Link>
      </div>
      <div className="chartInfo">
        <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={props.chartData}>
          <Tooltip contentStyle={{background:"transparent",border:"none"}}
          labelStyle={{display:"none"}}
          position={{x:10, y:60}} 
          />
          <Line dot={false} type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div className="chartText">
        <span className="percentage" style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}> {props.percentage}% </span>
        <span className="duration">this month</span>
      </div>
          
        
      </div>
    </div>
  )
}
