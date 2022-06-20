// REACT
import { NavLink } from "react-router-dom"
// MUI
import Typography from "@mui/material/Typography"

const NotRegistered = () => {
  return (
    <Typography 
      variant="subtitle2"
      component="div"
      gutterBottom
      sx={{ textAlign: 'left' }}
    >
      Not registered yet? 
      <NavLink to={'/signup'} style={{ margin: '5px', textDecoration: 'none' }} >
        Sign Up
      </NavLink>
    </Typography>
  )
}
export default NotRegistered