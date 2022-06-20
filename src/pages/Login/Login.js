// REACT
import { NavLink } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import AuthErrorMessage from '../../components/AuthErrorMessage'
// MUI
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
// AUTH
import { useLogin } from '../../hooks/auth/useLogin'
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be a minimum of 8 characters length")
    .required("You must enter a password")
})

const Login = () => {
  const { error, login } = useLogin()

  const margin = {
    my: '10px'
  }

  const signupText = {
    textAlign: 'left'
  }

  const linkStyle = {
    marginLeft: '5px',
    textDecoration: 'none'
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      login(values)
    },
    validationSchema
  })


  return (
    <Container sx={[{my: 8}]} className="login" maxWidth="xs">
      <Typography 
        variant="h4" 
        color="initial" 
        component="h2" 
        gutterBottom
        sx={{m: 4}}
      >
        Log In
      </Typography>
      <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
        <TextField
          label='Email'
          id='email'
          type='email'
          variant='outlined'
          required
          fullWidth
          sx={margin}
          {...formik.getFieldProps('email')}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label='Password'
          id='password'
          type='password'
          variant='outlined'
          required
          fullWidth
          sx={margin}
          {...formik.getFieldProps('password')}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button 
          sx={margin}
          variant="contained"
          color="primary"
          type='submit'
          fullWidth
        >
        Log In  
        </Button>
        {error && <AuthErrorMessage authType='login' />}
      </form>
      <Typography 
        variant="subtitle2"
        component="div"
        gutterBottom
        sx={signupText}
      >
        Not registered yet? 
        <NavLink to={'/signup'} style={linkStyle} >Sign Up</NavLink>
      </Typography>

      <BackButton />

    </Container>
  )
}
export default Login