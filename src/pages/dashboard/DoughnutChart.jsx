import React from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from '@mui/material'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({name, data}) => {
    return (
        <>
        <Box>
            <Typography>
                <h3>{name}</h3>
            </Typography>
            <Doughnut data={data} />
        </Box>
        </>
    )
}
DoughnutChart.prototype = {
    name: PropTypes.string,
    data: PropTypes.object
}

export default DoughnutChart;