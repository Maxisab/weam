// REACT
// MUI
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'

// STYLES
const margin = [{
  my: '10px'
}]

// YUP
const phoneRegExp = /^[0-9]{10}$/
const validationSchema = yup.object({
  type: yup
    .string("Enter event description")
    .required("Event description is required"),
  date: yup
    .date()
    .nullable()
    .required("Event date is required"),
  time: yup
    .date()
    .nullable()
    .required("Event time is required"),
  location: yup
    .string("Enter event location")
    .required("Event location is required"),
  contacts: yup
    .string("Enter contact's phone number")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Contact's phone number is required")
})

const SubRequest = () => {

  const formik = useFormik({
    initialValues: {
      type: "",
      date: null,
      time: null,
      location: "",
      contacts: ""
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema
  })

  return (
    <Container sx={{my: 10}} className="" maxWidth="xs">
      <Typography 
        variant="h6" 
        color="initial" 
        component="h2" 
        gutterBottom
        sx={{my: 2}}
      >
        FIND SUBS
      </Typography>
      <form noValidate autoComplete='off' onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label='For what?'
            id='type'
            variant='outlined'
            required
            fullWidth
            {...formik.getFieldProps('type')}
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
          />
          <DesktopDatePicker
            renderInput={(props) => (
              <TextField 
                {...props}
                label="Which day?"
                id="date"
                {...formik.getFieldProps('date')}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
                required 
                fullWidth
              />
            )}
            value={formik.values.date}
            onChange={(value) => (
              formik.setFieldValue("date", value)
            )}
          />
          <MobileTimePicker
            renderInput={(props) => (
              <TextField 
                {...props}
                label="What time?"
                id="time"
                {...formik.getFieldProps('time')}
                error={formik.touched.time && Boolean(formik.errors.time)}
                helperText={formik.touched.time && formik.errors.time}
                required 
                fullWidth
              />
            )}
            value={formik.values.time}
            onChange={(value) => (
              formik.setFieldValue("time", value)
            )}
          />
          <TextField
            label='Where?'
            id='location'
            variant='outlined'
            required
            fullWidth
            {...formik.getFieldProps('location')}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
          <TextField
            label='Who?'
            id='contacts'
            variant='outlined'
            required
            fullWidth
            {...formik.getFieldProps('contacts')}
            error={formik.touched.contacts && Boolean(formik.errors.contacts)}
            helperText={formik.touched.contacts && formik.errors.contacts}
          />
          <Button 
            variant="contained"
            color="primary"
            type='submit'
            fullWidth
          >
          Send Request
          </Button>
        </Stack>
      </form>

    </Container>
  )
}
export default SubRequest