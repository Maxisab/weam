// STYLESHEETS
import './App.css';
// COMPONENTS
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import SubRequest from './pages/SubRequest/SubRequest';
import FadeMenu from './components/FadeMenu';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// HOOKS
import { useAuthContext } from './hooks/auth/useAuthContext';
// MUI
import { createTheme, ThemeProvider } from '@mui/material';
import { lightBlue, orange } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: orange,
  },
  typography: {
    fontFamily: '"Permanent Marker", "cursive"',
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif;'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif;'
        }
      }
    }
  }
})

function App() {
  const { user, authIsReady } = useAuthContext()
  
  return (
    <div className="App">
      {authIsReady && (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <FadeMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sub-request" element={<SubRequest />} />
            <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/profile" element={user ? <Navigate to="/" /> : <Profile />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      )}
    </div>
  );
}

export default App;
