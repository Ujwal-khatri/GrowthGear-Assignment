import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartComponent = ({ data }) => {
 
  const chartData =
    data || {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Sample Data',
          data: [10, 20, 15, 30, 25],
          borderColor: 'rgba(75,192,192,1)',
          fill: false,
        },
      ],
    };

  return (
    <div className="mt-4">
      <Line data={chartData} 
      options={{
        responsive: true,
        maintainAspectRatio: false, 
      }}
      style={{ width: '700px', height: '500px' }}
      />
    </div>
  );
};

export default ChartComponent;
