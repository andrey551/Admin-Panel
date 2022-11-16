import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const VerticalBarChart = ({name, data}) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      };
    return (
        <>
        <h3>{name}</h3>
        <Bar options={options} data={data} />
        </>
    )
}

VerticalBarChart.propTypes = {
    name: PropTypes.string,
    data: PropTypes.object
}
export default VerticalBarChart;