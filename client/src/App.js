
import './App.css';
import OTPverification from './components/OTPverification';
import RegistrationPage from './components/RegistrationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
  
      <Router>
        <Routes>
          <Route path='/' element={ <RegistrationPage/> } />
          <Route path='/OTPverification' element={ <OTPverification/> } />
        </Routes>
      </Router>

  
  );
}

export default App;
