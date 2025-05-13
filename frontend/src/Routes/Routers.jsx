import React from 'react' 
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Contact from '../Pages/Contact'
import Doctors from '../Pages/Doctors/Doctors'
import DoctorsDetails from '../Pages/Doctors/DoctorsDetails'
import MyAccount from '../Dashboard/user-account/myAccount.jsx';
import Dashboard from '../Dashboard/doctor-account/Dashboard.jsx';


import{Routes, Route} from 'react-router-dom' ;
import ProtectedRoute from './ProtectedRoute.jsx';

const Routers =() => {
    return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctors/:id" element={<DoctorsDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route  path="/services" element={<Services/>} />
        <Route  
            path="/login/profile/me" 
            element={ 
            
                 <MyAccount/>
                 
                } />
        <Route  
            path="/doctors/profile/me" 
            element={
            
                 <Dashboard/> 
            }/>
        </Routes>
    );
};

 export default Routers;