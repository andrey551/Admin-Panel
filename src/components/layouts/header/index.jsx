import Search from "./Searchbar"
import AccountPopover from "./AccountPopover"
import {Box} from '@mui/material'
import LanguagePopover from "./LanguagesPopover"
import React, {useState, useEffect} from 'react';
const Header = () => {

    return (
        <Box>
            <Box sx={{display: 'flex', justifyContents:'space-between', paddingTop: 2, backdropFilter: "blur(2px)", paddingBottom: 2, backgroundColor: 'rgba(0, 0, 0, 0)' , minWidth: 1240, position: 'fixed', zIndex: 2}}>
                <Search style={{float: 'left'}}/>
                <Box  flex={1}>
                    <div style={{float:'right' , marginRight: 50, display:'flex'}}>
                    <LanguagePopover/>
                    <AccountPopover/>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}

export default Header;