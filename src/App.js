import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Home from './pages/Home/Home/Home';
import WriteBlog from './pages/WriteBlog/WriteBlog';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './pages/AdminRoute/AdminRoute';
import Payment from './pages/Dashboard/Payment/Payment';
import AddReview from './pages/Dashboard/AddReview/AddReview';
import MyOrder from './pages/Dashboard/MyOrders/MyOrder/MyOrder';
import AddService from './pages/Dashboard/AddService/AddService';
import PackegeDetails from './pages/DetailsPage/PackegeDetails/PackegeDetails';




function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='packegeDetails/:packegesId' element={<PackegeDetails/>}/>
        <Route path="feedback" element={<PrivateRoute><WriteBlog></WriteBlog></PrivateRoute>}></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>


<Route path={`/dashboard/makeAdmin`} element={<AdminRoute> <MakeAdmin></MakeAdmin></AdminRoute>} />

{/* <Route path={`/dashboard/manageService`} element={<AdminRoute><ManageProducts /></AdminRoute>} /> */}
{/* <Route path={`/dashboard/manageOrder`} element={<AdminRoute><ManageAllOrder /></AdminRoute>} /> */}

<Route path={`/dashboard/payment`} element={<Payment/>} />
<Route path={`/dashboard/myorder`} element={<MyOrder/>} /> 
<Route path={`/dashboard/addservice`} element={<AddService/>} /> 
<Route path={`/dashboard/addReview`} element={<AddReview/>} /> 

</Route>
       

        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path= "*" element={<NotFound/>}></Route> 

      </Routes>
   
    </AuthProvider>
  );
}

export default App;