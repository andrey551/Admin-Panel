import React from 'react'
import PropTypes from 'prop-types';
import { noCase } from 'change-case';
import {
  Avatar,
  Typography,
  ListItemText,
  ListItemButton,
} from '@mui/material'
import Iconify from '../../../components/iconify';
NotificationItem.propTypes = {
    notification: PropTypes.shape({
      createdAt: PropTypes.instanceOf(Date),
      id: PropTypes.string,
      isUnRead: PropTypes.bool,
      title: PropTypes.string,
      description: PropTypes.string,
      type: PropTypes.string,
      avatar: PropTypes.any,
    }),
  };

const NotificationItem = ({ notification }) => {
    const { avatar, title } = renderContent(notification);
  
    return (
      <ListItemButton
        sx={{
          py: 1.5,
          px: 2.5,
          mt: '1px',
          ...(notification.isUnRead && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        {/* <ListItemAvatar> */}
          <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
        {/* </ListItemAvatar> */}
        <ListItemText
          primary={title}
          secondary={
            <Typography
              variant="caption"
              sx={{
                mt: 0.5,
                display: 'flex',
                alignItems: 'center',
                color: 'text.disabled',
              }}
            >
              <Iconify icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
              {/* {fToNow(notification.createdAt)} */}
            </Typography>
          }
        />
      </ListItemButton>
    );
  }
  
  
  function renderContent(notification) {
    const title = (
      <Typography variant="subtitle2">
        {notification.title}
        <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
          &nbsp; {noCase(notification.description)}
        </Typography>
      </Typography>
    );
  
    if (notification.type === 'order_placed') {
      return {
        avatar: <img alt={notification.title} src="/assets/icons/ic_notification_package.svg" />,
        title,
      };
    }
    if (notification.type === 'order_shipped') {
      return {
        avatar: <img alt={notification.title} src="/assets/icons/ic_notification_shipping.svg" />,
        title,
      };
    }
    if (notification.type === 'mail') {
      return {
        avatar: <img alt={notification.title} src="/assets/icons/ic_notification_mail.svg" />,
        title,
      };
    }
    if (notification.type === 'chat_message') {
      return {
        avatar: <img alt={notification.title} src="/assets/icons/ic_notification_chat.svg" />,
        title,
      };
    }
    return {
      avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
      title,
    };
  }

  export default NotificationItem;