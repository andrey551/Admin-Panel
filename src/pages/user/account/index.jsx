import React from 'react'
import { Box, Container } from "@mui/material";
import Header from "../../../components/layouts/header";
import NavMenu from "../../../components/layouts/nav_bar/NavMenu";
import General from "./General";

const UserPage = () => {
    return (
        <>
        <Box sx={{display: 'flex'}}>
            <Box flex={1}>
                <NavMenu/>
            </Box>
            <Box flex = {4}>
                <Box sx={{display: 'block'}}>
                    <Header/>
                    <General/>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default UserPage;