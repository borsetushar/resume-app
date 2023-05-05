import './App.css';
import Education from './Components/Details/Education';
import KeySkills from './Components/Details/KeySkills';
import Preview from './Components/Details/Preview';
import WorkExperience from './Components/Details/WorkExperience';
import Home from './Components/Home/Home';
import Temp1 from './Components/Templates/Temp1';
import { Routes,Route } from 'react-router-dom';
import About from './Components/AboutUs/About';
import MyResume from './Components/MyResume/MyResume';
import Details from './Components/Details/Details';
import { createTheme,ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },

  });
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/myresume' element={<MyResume/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/workexperience' element={<WorkExperience />}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/keyskill' element={<KeySkills />}/>
          <Route path='/preview' element={<Preview />}/>
          <Route path='/Temp1' element={<Temp1/>}/>
       </Routes>
       <ToastContainer/>
       </ThemeProvider>
    </div>
  );
}

export default App;
