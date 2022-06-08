// HOOKS
import { useLogout } from '../hooks/useLogout';
// REACT COMPONENTS
import { NavLink } from 'react-router-dom';
// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const navlink = {
  color: "black",
  cursor: "pointer",
  margin: "0 10px 0 10px",
  textDecoration: 'none'
}

const logoStyle = {
  color: "black",
  cursor: "pointer",
  marginRight: 'auto',
  textDecoration: 'none'
}


const Navbar = ({ user }) => {
  const { logout } = useLogout()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={logoStyle} >
            <NavLink to={'/'} style={logoStyle} >WEAM</NavLink>
          </Typography>
          {!user && <NavLink to={'/login'} style={navlink} underline="none" >LOGIN</NavLink>}
          {!user && <NavLink to={'/signup'} style={navlink} underline="none" >SIGNUP</NavLink>}
          {user && <Typography component="p" sx={navlink} onClick={logout} >LOGOUT</Typography>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar