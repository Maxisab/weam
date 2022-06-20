// REACT
import ContactList from '../../components/ContactList'
import { useAuthContext } from '../../hooks/auth/useAuthContext'
// MUI
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"


const Profile = () => {
  const { user, userData } = useAuthContext()

  return (
    <Stack>

      <Typography 
        variant='h4' 
        component='h1' 
        gutterBottom
        sx={{
          m: 6
        }}
      >
        Profile
      </Typography>

      <Grid 
        container
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={10} md={6} lg={4}>
          <Paper elevation={3} sx={{ p: 5 }}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <Box>
                  <Typography textAlign='left' gutterBottom>
                    Email
                  </Typography>
                  <Box sx={{ textAlign: 'left', m: 3 }} >{userData ? userData.email : 'Email goes here'}</Box>
                </Box>
                <Box>
                  <Typography textAlign='left' gutterBottom>
                    Contacts
                  </Typography>
                  <ContactList />
                </Box>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>

    </Stack>
  )
}
export default Profile