
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface FuelChartProps {
  consumptions: { [key: string]: number };
}

export const FuelChart: React.FC<FuelChartProps> = ({ consumptions }) => {
  // Transform consumption data to chart format
  const data = Object.entries(consumptions).map(([fuelType, value]) => ({
    name: fuelType === 'benzyna' 
      ? 'Benzyna' 
      : fuelType === 'diesel' 
        ? 'Diesel' 
        : 'LPG',
    value: value,
    color: fuelType === 'benzyna' 
      ? '#FF8C00' 
      : fuelType === 'diesel' 
        ? '#2E8B57' 
        : '#8B5CF6',
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis dataKey="name" />
        <YAxis unit=" L/100km" />
        <Tooltip
          formatter={(value) => [`${value} L/100km`, 'Zużycie']}
          labelFormatter={(name) => `Paliwo: ${name}`}
        />
        <Bar 
          dataKey="value" 
          name="Zużycie"
          fill="#2E8B57" 
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
