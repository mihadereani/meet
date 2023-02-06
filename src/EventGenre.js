import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Legend, Cell } from 'recharts';
import './App.css';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#DE3163',
    '#CCCCFF',
  ];

  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

      const data = genres.map((genre) => {
        const value = events.filter((event) =>
          event.summary.includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data;
    };
    setData(() => getData());
  }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart>
        <Legend verticalAlign='top' height={36} />
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerRadius={100}
          fill='#8884d8'
          dataKey='value'
          label={({ name, percent }) =>
            percent > 0 ? `${name} ${(percent * 100).toFixed(0)}%` : null
          }
          fontSize='12'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
