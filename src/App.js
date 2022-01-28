import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home/Home/Home';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AdminRoute from './pages/AdminRoute/AdminRout';
import AllBlogs from './pages/Dashboard/AllBlogs/AllBlogs/AllBlogs';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import WriteArticle from './pages/Dashboard/WriteArticle/WriteArticle';
import Home from './pages/Home/Home/Home';
import WriteBlog from './pages/WriteBlog/WriteBlog';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
// import NotFound from './NotFound/NotFound';
// 

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path="feedback" element={<PrivateRoute><WriteBlog></WriteBlog></PrivateRoute>}></Route>


        <Route path="/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>}>

          <Route path="/dashboard" element={<AdminRoute><DashboardHome /></AdminRoute>}></Route>
          <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>}></Route>
          <Route path="/dashboard/Allblogs" element={<AdminRoute><AllBlogs /></AdminRoute>}></Route>
          <Route path="/dashboard/article" element={<AdminRoute><WriteArticle /></AdminRoute>}></Route>

        </Route>
       

        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path= "*" element={<NotFound/>}></Route> 

      </Routes>
   
    </AuthProvider>
  );
}

export default App;