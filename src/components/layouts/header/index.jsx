import Search from "./Searchbar"
import AccountPopover from "./AccountPopover"
import {Box} from '@mui/material'
import LanguagePopover from "./LanguagesPopover"
import React from 'react';
const Header = () => {
    return (
        <Box>
            <Box sx={{display: 'flex', justifyContents:'space-between', paddingTop: 2,paddingBottom: 2, backgroundColor: 'primary.dark'}}>
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