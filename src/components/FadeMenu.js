import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// HOOKS
import { useLogout } from '../hooks/auth/useLogout';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/auth/useAuthContext';

export default function FadeMenu() {
  const { user } = useAuthContext()
  const navigate = useNavigate()
  const { logout } = useLogout()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (!user) {
      navigate('/')
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleClose()
    if (!user) return false
    navigate('/profile')
  }
  
  const handleLogout = () => {
    handleClose()
    logout()
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 2 }}>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography className='weam' variant="h4" component="h1" sx={{ letterSpacing: '4px' }}>WEAM</Typography>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem dense={true} onClick={handleProfile}>Profile</MenuItem>
        <MenuItem dense={true} onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}