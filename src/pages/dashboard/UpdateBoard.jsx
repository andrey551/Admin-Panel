import React from 'react';
import { Button, Card, Divider, Box, CardActions } from "@mui/material"
import PropTypes from 'prop-types';

const updates = [{
    type : "user",
    header: "BoizNo1 has commented to an post",
    content: "life is short, live lower",
    time: '2 hours ago'
    }, {
        type : "admin",
        header: " Admin BoizNo2 sent you a message",
        content: "hello, fenc",
        time: '3 hours ago'
    },
    {
        type : "database",
        header: "Database maintenance",
        content: "Maintenance of category area and question store, for 2 hours, from 22.00 today",
        time: '1 hours ago'
    }, {
        type : "event",
        header: "Mai's birthday",
        content: "Let's send her best wishes",
        time: 'today'
    }]
const UpdateBoard = () => {
    return (
        <>
        <Card sx={{maxWidth: 700,margin: 3,  backgroundColor: 'rgba(18, 18, 145, 0.13)'}}>
            <Box>
                <h2>News Update:</h2>
            </Box>
            <Box>
                {updates.map(update => {
                    return <UpdateItem data = {update} /> 
                })}
            </Box>
            <Divider/>
            <CardActions sx={{float:'right', width: 100}}>
                <Button>Read all</Button>
            </CardActions>
        </Card>
        </>
    )
}

const UpdateItem = ({data}) => {
    return (
        <>
            <Card sx={{display: 'flex', margin: 2, padding: 1}}>
                <Box sx={{display: 'flex', width: 570}}>
                    <div>
                        <img style={{borderRadius: 5, width: 50}} src={loadImage(data.type)} />
                    </div>
                    <div style={{display: 'block'}}>
                        <div>
                            <text style={{textOverflow: "ellipsis", marginLeft: 10, float: 'left'}}><b>{data.header}</b></text>
                        </div>
                        <text style={{  marginLeft: 10,  float: 'left', textOverflow: 'ellipsis'}}>{data.content}</text>
                    </div>
                </Box>
                <div> 
                    <text style={{color:'rgba(0, 0, 255, 0.5)', fontSize: 'small', float:'right'}}>{data.time}</text>
                </div>
            </Card>
        </>
    )
}

UpdateItem.propTypes = {
    data: PropTypes.object
}
const loadImage = (type) => {
    switch(type) {
        case 'event':
            return require("../../assets/notification-icon/event.png")
        case 'user':
            return require("../../assets/notification-icon/user.png")
        case 'admin':
            return require("../../assets/notification-icon/admin.png")
        case 'database':
            return require("../../assets/notification-icon/database.png")
        default:
            return ;

    }
}

export default UpdateBoard;