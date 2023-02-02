import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';
import './App.css';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

      const data = genres.map((genre) => {
        const value = events.filter((event) =>
          event.summary.split(' ').includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data;
    };
    setData(() => getData());
  }, [events]);

  return (
    <ResponsiveContainer
      width='100%'
      height={400}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <PieChart height={400}>
        <Legend verticalAlign='top' height={18} />
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
          fontSize='12'
        ></Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
