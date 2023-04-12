import "./Statistic.css"
import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import dataAssignment from '../../../public/AssignChart.json'

const Statistics = () => {
  

const data = dataAssignment['assignments'];

      return (
        <div className='div'>
             <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="tooltip" label={{ value: 'Number Of Assignment', position: 'insideBottomRight', offset: 0 }} scale="band" />
          <YAxis label={{ value: 'Marks', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="marks" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="marks" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
        </div>
      );;
};

export default Statistics;
