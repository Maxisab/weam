// COMPONENTS
import Button from '@mui/material/Button';

// // FIREBASE
// import { useCollection } from '../../hooks/useCollection';

const Home = () => {
  // const { documents: users } = useCollection('users')

  return (
    <div className="home">
      <Button variant="contained" size="large">Find Subs</Button>
      <Button variant="contained">Log In</Button>
      <Button variant="contained">Sign Up</Button>
      {/* {users && users.map((user) => (
        <div className="user-div">{user.username}</div>
      ))} */}
    </div>
  )
}
export default Home