import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const NavItem = ({icon, title}) => {
    return (
        <Button sx={{marginRight: 6, paddingTop: 2, paddingBottom: 2,  borderRadius: '10px'}} style={{justifyContent: "flex-start"}} fullWidth>
            <div style={{paddingRight: 20}}>
                <img width={30} src={icon}/>
            </div>
            <div>
                <text style={{fontWeight:'bold'}}>{title}</text>
            </div>
        </Button>
    )
}

NavItem.propTypes = {
    icon : PropTypes.object,
    title: PropTypes.string
}

export default NavItem;