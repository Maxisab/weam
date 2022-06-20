// COMPONENTS
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/auth/useAuthContext'
import { useLogout } from '../../hooks/auth/useLogout';

const center = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60vh'
}

const btn = [{
  mx: 'auto',
  my: '10px'
}]

const Home = () => {
  const { user, userData } = useAuthContext()
  const { logout } = useLogout()

  return (
    <Grid container alignItems='center' justifyContent='center' sx={{ mt: 10, p: 8 }}>

      <Grid item xs={10} md={6} lg={4}>
        <Paper elevation={3} sx={{ p: 8 }}>
          <Grid container alignItems='center' justifyContent='center'>

            <Grid item xs={12}>
              <Button component={NavLink} to="/sub-request" sx={btn} variant="contained" size="large">Find Subs</Button>
            </Grid>
            <Grid item xs={12}>
              {!user && <Button component={NavLink} to="/login" sx={btn} variant="contained" size="large">Log In</Button>}
            </Grid>
            <Grid item xs={12}>
              {!user && <Button component={NavLink} to="/signup" sx={btn} variant="contained" size="large">Sign Up</Button>}
            </Grid>
            <Grid item xs={12}>
              {user && <Button onClick={logout} sx={btn} variant="contained" size="large">Log Out</Button>}
            </Grid>
            {/* <Grid item xs={12}>
              <button onClick={() => { console.log(userData) }}>Check state</button>
            </Grid> */}

          </Grid>
        </Paper>
      </Grid>

    </Grid>
  )
}
export default Home