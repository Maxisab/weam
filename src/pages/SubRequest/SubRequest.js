import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { useState } from 'react'

const margin = [{
  my: '10px'
}]

const SubRequest = () => {
  const [gameTime, setGameTime] = useState(null)
  const [sport, setSport] = useState(null)  
  const [venue, setVenue] = useState(null)
  const [phone, setPhone] = useState(null)  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(sport)
    console.log(gameTime)
    console.log(venue)
    console.log(phone)
  }

  return (
    <Container sx={[{my: 8}]} className="" maxWidth="xs">
      <Typography 
        variant="h6" 
        color="initial" 
        component="h2" 
        gutterBottom
      >
        Find subs
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          sx={margin}
          variant='outlined'
          label='For what?'
          name='what'
          id='what'
          type='text'
          required
          fullWidth
          onChange={(e) => {
            setSport(e.target.value);
          }}
        />
        <DateTimePicker
          renderInput={(props) => <TextField {...props} required fullWidth/>}
          label="When?"
          value={gameTime}
          onChange={(newValue) => {
            setGameTime(newValue);
          }}
        />
        <TextField
          sx={margin}
          variant='outlined'
          label='Where?'
          name='where'
          id='where'
          type='text'
          required
          fullWidth
          onChange={(e) => {
            setVenue(e.target.value);
          }}
        />
        <TextField
          variant='outlined'
          label='Who?'
          name='who'
          id='who'
          type='tel'
          required
          fullWidth
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <Button 
          sx={margin}
          variant="contained"
          color="primary"
          type='submit'
          fullWidth
        >
        Send Request
        </Button>
      </form>

    </Container>
  )
}
export default SubRequest