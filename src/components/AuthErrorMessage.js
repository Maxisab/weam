import Card from '@mui/material/Card'

const AuthErrorMessage = ({error, authType}) => {

  const errStyle = {
    p: 1,
    bgcolor: '#FFCCCB',
    borderColor: 'error.main'
  }

  const createErrorText = () => {
    if (authType === 'login') {
      return 'There was a problem logging in... Please check your email and password and try again.'
    } else if (authType === 'signup') {
      return 'There was a problem signing you up.'
    }
  }

  console.log(authType)

  return (
    <Card className='auth-error-message' variant="outlined" sx={errStyle}>
      {createErrorText()}
    </Card>
  )
}

export default AuthErrorMessage