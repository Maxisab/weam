// STYLESHEETS
import './App.css';

// COMPONENTS
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import SubRequest from './pages/SubRequest/SubRequest';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material';
import { lightBlue, orange } from '@mui/material/colors'
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';

const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: orange,
  },
})

function App() {
  const { user, authIsReady } = useAuthContext()
  
  return (
    <div className="App">
      {authIsReady && (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sub-request" element={<SubRequest />} />
            <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      )}
    </div>
  );
}

export default App;
