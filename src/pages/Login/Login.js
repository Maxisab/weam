// REACT
import { NavLink } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import AuthErrorMessage from '../../components/AuthErrorMessage'
// MUI
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
// AUTH
import { useLogin } from '../../hooks/auth/useLogin'
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'
import NotRegistered from '../../components/NotRegistered'

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
    <Stack>

      <Typography 
        variant="h4" 
        color="initial" 
        component="h2" 
        gutterBottom
        sx={{m: 4}}
      >
        Log In
      </Typography>

      <Grid container alignItems='center' justifyContent='center' sx={{  }}>

        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Paper elevation={3} sx={{ py: 6 }}>
            <Grid container alignItems='center' justifyContent='center'>

              <Grid item xs={8}>
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
              </Grid>

              <Grid item xs={7}>
                <NotRegistered />
              </Grid>

            </Grid>
          </Paper>
        </Grid>

      </Grid>
      <BackButton />
    </Stack>

    
  )
}
export default Login