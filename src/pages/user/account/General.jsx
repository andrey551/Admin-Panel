import React from 'react'
import { Avatar, TextField, Box, MenuItem, Button, Container } from "@mui/material"
import { useState } from 'react';
import countries from '../../../assets/country/countries';
import PropTypes from 'prop-types';

const General = () => {
    const data = {
        name: "Tuan Anh Dau",
        email: "tad@gmail.com",
        phoneNumber: "0984654123",
        address: "Viazemsky 5/7",
        country: "Viet Nam",
        region: "North",
        city: "Ha Noi",
        zip_code: "11000" 
      };
    const actionType = "Create"

    const [country, setCountry] = useState(data.country);
    const handleChange = (event) => {
        setCountry(event.target.value);
      };
    return (
        <>
        <Container style={{display: 'flex'}}>
        <Box sx={{width: window.screen.width / 3}}>
            <Box>
                <Button disabled>
                    <Avatar sx={{ height: 200, width: 200, border:'2px solid green'}} rounded="true" >
                        <img src={require("../../../assets/avatar/monk.jpg")} style={{ height: 200, width: 200}}/>
                    </Avatar>
                </Button>
            </Box>
            <Box>
                <Button sx={{marginTop: 3}}> Change Avatar </Button>
            </Box>       
        </Box>
        <Box>
            <TextGroup labels={[{label:"Name", value: data.name},  {label: "Email Address", value: data.email}]}/>
            <TextGroup labels={[{label: "Phone Number", value: data.phoneNumber}, {label: "Address", value: data.address}]}/>
            <Box  sx={{marginTop: 2}}>
            <TextField
            sx={{marginRight: 2, width: 222}}
                select
                label="Country"
                value={country}
                onChange={handleChange}
                helperText="Please select your country"
            > 
                {countries.map((option) => (
                    <MenuItem key={option.label} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField sx= {{marginRight: 2}} label="State/Region" variant='outlined' value={data.region}/>
            </Box>
            <TextGroup labels={[{label: "City", value: data.city}, {label: "Zip Code", value: data.zip_code}]}/>
            <Box>
                <TextField sx={{marginTop: 3, marginRight: 2, width: 460}} multiline rows = {4} label = "About" value={data.about}/>
            </Box>
            <Box sx={{marginTop: 2}}>
                <Button variant='contained' sx={{float: 'right', marginRight: 2}}>
                    {actionType}
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
            </Box>    
        </Box>
        </Container>
        </>
    )
}
const TextGroup = ({labels}) => {
    return (
        <Box sx={{marginTop: 2}}>
            {Array.from(labels).map((label) => {
                return <TextField label={label.label} value={label.value} variant="outlined" sx={{marginRight: 2}} required/>
            })}
        </Box>
    )
}

General.propTypes = {
    data: PropTypes.object,
    actionType: PropTypes.string
}

export default General;