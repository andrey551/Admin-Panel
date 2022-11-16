import React from 'react'
import {Button, Box} from '@mui/material'


const Search = () => {
    return (
        <>
        <Box display='flex' justifyContent="flex-start" fullWidth>
            <Button>
                <img src={require("../../../assets/header-icon/search.png")} style={{height: 35}}/>
            </Button>
        </Box>
        </>
    )
}

export default Search;