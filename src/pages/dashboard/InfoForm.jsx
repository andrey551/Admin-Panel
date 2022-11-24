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
            <Card sx={{minWidth:350, maxHeight:180, marginRight: 4, marginBottom: 4, display: 'grid' , backgroundColor: 'rgba(57, 33, 208, 0.39)'}} variant='outlined'>
            <CardContent sx={{display: 'block'}}>
                <Box >
                    <b style={{fontSize: 20}}>{cardInfo.title}</b>
                </Box>
                <Box sx={{display: 'grid'}}>
                    <Box sx={{float: 'left', display: 'flex',marginLeft: 2 ,  alignItems: 'center'}}>
                        <Box>
                            {drawChange(cardInfo.isIncrease)} 
                        </Box>
                        <Box>
                            <Typography>{cardInfo.percent}</Typography>
                        </Box>
                   </Box>
                   <Box sx={{marginLeft: 4 }}>
                        <b style={{float: 'left', fontSize: 47, marginTop: 15}}>{cardInfo.total}</b>
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