// COMPONENTS
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/auth/useAuthContext'
import { useLogout } from '../../hooks/auth/useLogout';

// // FIREBASE
// import { useCollection } from '../../hooks/useCollection';

const center = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60vh'
}

const btn = [{
  display: 'block',
  mx: 'auto',
  my: '10px'
}]

const Home = () => {
  // const { documents: users } = useCollection('users')
  const { user, userData } = useAuthContext()
  const { logout } = useLogout()

  return (
    <div className="home" style={center}>
      <Button component={Link} to="/sub-request" sx={btn} variant="contained" size="large">Find Subs</Button>
      {!user && <Button component={Link} to="/login" sx={btn} variant="contained" size="large">Log In</Button>}
      {!user && <Button component={Link} to="/signup" sx={btn} variant="contained" size="large">Sign Up</Button>}
      {user && <Button onClick={logout} sx={btn} variant="contained" size="large">Log Out</Button>}
      <button onClick={() => { console.log(userData) }}>Check state</button>
    </div>
  )
}
export default Home