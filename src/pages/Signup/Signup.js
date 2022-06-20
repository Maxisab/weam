// REACT
import { NavLink } from 'react-router-dom'
import AuthErrorMessage from '../../components/AuthErrorMessage'
import BackButton from '../../components/BackButton'
// MUI
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
// HOOKS
import { useSignup } from '../../hooks/auth/useSignup'
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be a minimum of 8 characters length")
    .required("You must enter a password"),
  passwordConfirmation: yup
    .string("Confirm your password")
    .required("You must confirm your password")
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})

const Signup = () => {
  const { error, signup } = useSignup()

  const margin = {
    my: '10px'
  }

  const loginText = {
    textAlign: 'left'
  }

  const linkStyle = {
    marginLeft: '5px',
    textDecoration: 'none'
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
    onSubmit: (values) => {
      signup(values)
    },
    validationSchema
  })

  return (
    <Container sx={[{my: 8}]} className="signup" maxWidth="xs">
      <Typography 
        variant="h4" 
        color="initial" 
        component="h2" 
        gutterBottom
        sx={{m: 4}}
      >
        SIGN UP
      </Typography>
      <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
        <TextField
          label='First Name'
          id='firstName'
          type='text'
          variant='outlined'
          required
          fullWidth
          sx={margin}
          {...formik.getFieldProps('firstName')}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          label='Last Name'
          id='lastName'
          type='lastName'
          variant='outlined'
          required
          fullWidth
          sx={margin}
          {...formik.getFieldProps('lastName')}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
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
        <TextField
          label='Confirm Password'
          id='passwordConfirmation'
          type='password'
          variant='outlined'
          required
          fullWidth
          sx={margin}
          {...formik.getFieldProps('passwordConfirmation')}
          error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
          helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
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
        {error && <AuthErrorMessage authType="signup" />}
      </form>
      <Typography 
        variant="subtitle2"
        component="div"
        gutterBottom
        sx={loginText}
      >
        Already registered? 
        <NavLink to={'/login'} style={linkStyle} >Log In</NavLink>
      </Typography>

      <BackButton />

    </Container>
  )
}
export default Signup