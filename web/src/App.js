import logo from './logo.svg';
import './App.css';
// import Profile from './components/profile/Profile';
// import LoginForm from './components/login/LoginForm';
import Profile from './components/profile/Profile';
import LoginForm from './components/login/LoginForm';
import history from './components/history';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Dashboard/>}/>
      <Route exact path='/login' element={<LoginForm/>}/>
      {/* <Route exact path='/profile' element={<Profile/>}/> */}
    </Routes>
    </Router>
  );
}

export default App;
