import { Avatar, Container, Divider } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import { CATEGORY_OPTION, DASHBOARD_OPTION, LOGIN_OPTION, QUIZZ_OPTION, USER_OPTION } from '../../../redux/layouts/nav/navOptions';
import NavItem from './NavItem';

const MENU_OPTION = [DASHBOARD_OPTION, USER_OPTION, CATEGORY_OPTION, QUIZZ_OPTION, LOGIN_OPTION]
const NavMenu = () => {
    return (
        <>
        <Container sx={{width: 280, float: 'left', borderRight: '1px dashed rgba(0, 0, 0, 0.14)', minHeight : window.innerHeight, position: 'fixed'}}>
            <div style={{paddingTop: 30}}>
                    <img src={require("../../../assets/logo/Boost_logo.png")} style={{width: 80, float: 'left'}}/>
            </div>
            <div style = {{padding: 10,paddingTop: 20, paddingBottom: 20, display: 'flex', alignItems:'center', marginTop: 50, marginBottom: 30, backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: 10}}>
                <div>
                    <Avatar sx={{float: 'center', width: 35, height: 35}} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mangekyou_Sharingan_Itachi.svg/1200px-Mangekyou_Sharingan_Itachi.svg.png'}/>
                </div>
                <div style ={{display: 'block', marginLeft: 20}}>
                    <div>
                        <span style={{fontSize: 15}}><b>Tuan Anh Dau</b></span>
                    </div>
                    <div>
                        <span style={{float: 'left'}}>Admin</span>
                    </div>
                </div>
            </div>
            <Divider/>
            <Box sx={{float: 'left', marginTop: 5}}>
            <Stack>
            {MENU_OPTION.map((option) => (
                <div style={{alignItems:'center'}}>
                    <Box>
                        <NavItem icon  = {option.icon} title = {option.title}/>
                    </Box> 
                </div>
            ))}
            </Stack>
            </Box>
        </Container>
        
        </>
    )
}

export default NavMenu;