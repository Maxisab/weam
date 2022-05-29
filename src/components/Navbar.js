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
  mx: "10px"
}


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            WEAM
          </Typography>
          <Link href="/" sx={navlink}>HOME</Link>
          <Link href="/login" sx={navlink}>LOGIN</Link>
          <Link href="/signup" sx={navlink}>SIGNUP</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar