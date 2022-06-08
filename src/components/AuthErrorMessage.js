import Card from '@mui/material/Card'

const AuthErrorMessage = ({error}) => {
  // console.log(error)
  // const showError = (error) => {
  //   const credentialErrorText = 'Incorrect email or password'

  //   switch (error) {
  //     case 'auth/wrong-password':
  //       return credentialErrorText
  //     case 'auth/user-not-found':
  //       return credentialErrorText
  //     default:
  //       return error
  //   }
  // }

  const errStyle = {
    p: 1,
    bgcolor: '#FFCCCB',
    borderColor: 'error.main'
  }

  return (
    <Card className='auth-error-message' variant="outlined" sx={errStyle}>
      There was a problem logging in... Please check your email and password and try again.
    </Card>
  )
}

export default AuthErrorMessage