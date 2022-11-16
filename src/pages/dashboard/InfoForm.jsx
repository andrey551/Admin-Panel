import React from 'react'
import {Text} from 'react'
import { Card, CardContent, CardHeader, Box, Avatar, Typography } from '@mui/material';
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
import PropTypes from 'prop-types';

const InfoForm = ({cardInfo}) => {
    return (
        <>
            <Card sx={{minWidth:300,maxHeight:200, margin: 3 , backgroundColor: 'rgba(57, 33, 208, 0.39)'}} variant='outlined'>
            <CardHeader title={cardInfo.title} />
            <CardContent sx={{display: 'block'}}>
                <Box sx={{display:'flex', alignItems:'center'}}>
                   {drawChange(cardInfo.isIncrease)} 
                   <Typography>{cardInfo.percent}</Typography>
                   <Box sx={{marginLeft: 4}}>
                        <h2>{cardInfo.total}</h2>
                    </Box>
                </Box>
            </CardContent>
        </Card> 
        
        </>
    )
}

InfoForm.propTypes = {
    cardInfo: PropTypes.object
}

function drawChange(isIncrease) {
    if(isIncrease) {
        return <Avatar src={require("../../assets/card-icon/increase.png")} />;
    };

    return <Avatar src={require("../../assets/card-icon/decrease.png")}/>;
};



export default InfoForm;