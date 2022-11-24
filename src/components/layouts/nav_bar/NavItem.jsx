import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const NavItem = ({icon, title}) => {
    return (
        <Button sx={{ paddingTop: 2, paddingBottom: 2,  borderRadius: '10px', paddingRight: 10}} style={{justifyContent: "flex-start"}} fullWidth>
            <div style={{paddingRight: 20}}>
                <img width={30} src={icon}/>
            </div>
            <div>
                <b>{title}</b>
            </div>
        </Button>
    )
}

NavItem.propTypes = {
    icon : PropTypes.object,
    title: PropTypes.string
}

export default NavItem;