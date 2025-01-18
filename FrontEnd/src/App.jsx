import { Route, Routes } from 'react-router-dom';
// import './App.css'
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes> 
    </>
  )
}

export default App
