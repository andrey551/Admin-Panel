import React from 'react';
import {Box} from '@mui/material';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Typography } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
const LineChart = ({name, data}) => {
    
    return (
        <>
        <Typography>
            <h3>{name}</h3>
        </Typography>
        <Box sx={{marginTop: 8}}>
        <Line data={data} />
        </Box>
        </>
    )
}

LineChart.propTypes = {
    name: PropTypes.string,
    data: PropTypes.object
}

export default LineChart;