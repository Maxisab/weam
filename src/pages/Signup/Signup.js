// REACT HOOKS
import { useState } from 'react'

// MUI
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// AUTH
import { useSignup } from '../../hooks/useSignup'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const { error, signup } = useSignup()

  const margin = [{
    my: '10px'
  }]

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmailError(false)
    setPasswordError(false)

    signup(email, password)

    e.target.reset()
  }

  return (
    <Container sx={[{my: 8}]} className="signup" maxWidth="xs">
      <Typography 
        variant="h6" 
        color="initial" 
        component="h2" 
        gutterBottom
      >
        Sign Up
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          sx={margin}
          onChange={(e) => setEmail(e.target.value)}
          variant='outlined'
          label='Email'
          name='email'
          id='email'
          type='email'
          required
          fullWidth
          error={emailError}
        />
        <TextField
          sx={margin}
          onChange={(e) => setPassword(e.target.value)}
          variant='outlined'
          label='Password'
          name='password'
          id='password'
          type='password'
          required
          fullWidth
          error={passwordError}
        />
        <Button 
          sx={margin}
          variant="contained"
          color="primary"
          type='submit'
          fullWidth
        >
        Sign Up  
        </Button>
        {error && <p>{error}</p>}
      </form>

    </Container>
  )
}
export default Signup