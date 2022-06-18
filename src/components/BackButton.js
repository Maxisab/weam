// REACT
import { useNavigate } from 'react-router-dom'
// MUI
import Button from '@mui/material/Button'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <Button variant="text" sx={{ mt: 6 }}onClick={() => navigate('/')}>Back to Home</Button>
  )
}
export default BackButton