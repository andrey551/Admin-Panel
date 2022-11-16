import React from 'react';
import { Avatar, IconButton, Popover, Box, Typography, Divider, Stack, MenuItem } from "@mui/material";
import { useState } from "react";
import loadData from '../../../API/loadData';
import { HOME_OPTION, PROFILE_OPTION, SETTING_OPTION } from "../../../redux/layouts/header/AccountOptions";
const ACCOUNT_OPTIONS = [HOME_OPTION, PROFILE_OPTION, SETTING_OPTION];
const AccountPopover = () => {
    const account = loadData('../../../fake_data/account/info.json', {});
    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
      setOpen(event.currentTarget);
    };
  
    const handleClose = () => {
      setOpen(null);
    };
    return (
        <Box sx={{marginRight: 1}}>
            <IconButton onClick={handleOpen}
                    sx={{
                        p: 0,
                        ...(open && {
                          '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                          },
                        }),
                      }}>
                <Avatar src ={account.avatar}>

                </Avatar>
            </IconButton>
            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                  sx: {
                    p: 1,
                    mt: 1.5,
                    ml: 0.75,
                    width: 180,
                    '& .MuiMenuItem-root': {
                      px: 1,
                      typography: 'body2',
                      borderRadius: 0.75,
                    },
                  },
                }}>
                <Box sx={{ my: 1.5, px: 2.5 }}>
                <Typography variant="subtitle2" noWrap>
                    {account.displayName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                    {account.email}
                </Typography>
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack sx={{ p: 1 }}>
                {ACCOUNT_OPTIONS.map((option) => (
                    <MenuItem key={option.label} onClick={handleClose}>
                    {option.label}
                    </MenuItem>
                ))}
                </Stack>
                <Divider sx={{ borderStyle: 'dashed' }} />
                <MenuItem onClick={handleClose} sx={{ m: 1 }}>
                     Logout
                </MenuItem>
            </Popover>
        </Box>
    )
}

export default AccountPopover;