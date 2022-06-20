// REACT
import { NavLink } from "react-router-dom"
// MUI
import Typography from "@mui/material/Typography"

const AlreadyRegistered = () => {
  return (
    <Typography 
      variant="subtitle2"
      component="div"
      gutterBottom
      sx={{ textAlign: 'left' }}
    >
      Already registered? 
      <NavLink to={'/login'} style={{ margin: '5px', textDecoration: 'none' }} >
        Log In
      </NavLink>
    </Typography>
  )
}
export default AlreadyRegistered