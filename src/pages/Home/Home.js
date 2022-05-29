// COMPONENTS
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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

  return (
    <div className="home" style={center}>
      <Button component={Link} to="/sub-request" sx={btn} variant="contained" size="large">Find Subs</Button>
      <Button component={Link} to="/login" sx={btn} variant="contained" size="large">Log In</Button>
      <Button component={Link} to="/signup" sx={btn} variant="contained" size="large">Sign Up</Button>
      {/* {users && users.map((user) => (
        <div className="user-div">{user.username}</div>
      ))} */}
    </div>
  )
}
export default Home