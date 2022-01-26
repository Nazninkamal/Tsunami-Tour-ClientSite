import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import AuthProvider from './Context/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
// import Register from './Pages/Login/Register/Register';
import WriteBlog from './pages/WriteBlog/WriteBlog';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='feedback' element={<WriteBlog/>} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

      </Routes>
    </AuthProvider>
  );
}

export default App;