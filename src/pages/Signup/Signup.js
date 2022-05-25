
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const field = [{
  mt: '20px',
  mb: '20px'
}]


const Signup = () => {
  return (
    <div className="signup">
      <Typography 
        variant="h6" 
        color="initial" 
        component="h2" 
        gutterBottom 
      >
        Sign Up
      </Typography>
      <form noValidate autoComplete='off'>
        <TextField
          sx={field}
          label='Email'
          variant='outlined'
          required
        />
      </form>
    </div>
  )
}
export default Signup