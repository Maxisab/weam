// REACT
import { useHelpers } from '../../hooks/useHelpers'
import { useSubRequest } from '../../hooks/useSubRequest'
import { useAuthContext } from '../../hooks/auth/useAuthContext'
// MUI
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
// FORMS
import { useFormik } from 'formik'
import * as yup from 'yup'

// YUP
const phoneRegExp = /^\(?[0-9]{3}\)?\s?-?\.?\s?[0-9]{3}\s?-?\.?\s?[0-9]{4}$/g
const validationSchema = yup.object({
  event: yup
    .string("Enter event description")
    .required("Event description is required"),
  date: yup
    .date()
    .nullable()
    .required("Date is required"),
  time: yup
    .date()
    .nullable()
    .required("Time is required"),
  location: yup
    .string("Enter event location")
    .required("Location is required"),
  contacts: yup
    .string("Enter contact's phone number")
    .matches(phoneRegExp, "Please enter a valid 10-digit phone number")
    .required("Phone number is required"),
  males: yup
    .string("Enter event location")
    .required("Location is required"),
  females: yup
    .string("Enter event location")
    .required("Location is required")
})

const SubRequest = () => {
  const { userData } = useAuthContext()
  const { formatData} = useHelpers()
  const { createSubRequest } = useSubRequest()

  const formik = useFormik({
    initialValues: {
      event: "",
      date: null,
      time: null,
      location: "",
      contacts: ""
    },
    onSubmit: (values) => {
      const formattedValues = formatData(values)
      formattedValues.creator = userData
      createSubRequest(formattedValues)
      // console.log(formattedValues)
      // console.log(userData)
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
            id='event'
            variant='outlined'
            required
            fullWidth
            {...formik.getFieldProps('event')}
            error={formik.touched.event && Boolean(formik.errors.event)}
            helperText={formik.touched.event && formik.errors.event}
          />
          <MobileDatePicker
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
          <TextField
            label='Male players?'
            id='males'
            variant='outlined'
            required
            fullWidth
            {...formik.getFieldProps('males')}
            error={formik.touched.males && Boolean(formik.errors.males)}
            helperText={formik.touched.males && formik.errors.males}
          />
          <TextField
            label='Female players?'
            id='females'
            variant='outlined'
            required
            fullWidth
            {...formik.getFieldProps('females')}
            error={formik.touched.females && Boolean(formik.errors.females)}
            helperText={formik.touched.females && formik.errors.females}
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