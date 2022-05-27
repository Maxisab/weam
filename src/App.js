// STYLESHEETS
import './App.css';

// COMPONENTS
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { lightBlue, orange } from '@mui/material/colors'
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: orange,
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
