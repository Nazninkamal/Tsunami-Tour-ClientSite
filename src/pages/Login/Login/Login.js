import React from 'react';
import { Button,Container} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import google from '../../../images/google.png'

const Login = () => {

    const { signInUsingGoogle,saveUser, setUsers, setError } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location?.state?.from || '/home';

    //handle google sign in button
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                const user = result.user;
                setUsers(user)

                navigate(redirect);
                //save user to database
                saveUser(user.displayName, user.email, 'PUT')
            })
            .catch((error) => {
                setError(error.message)
            })
    };

    //handle sign in using email and password
  


    return (
       
            <div className="background">
                
                        <div className=' mx-auto p-5  rounded shadow d-flex justify-content-center align-items-center' style={{height: 500}}>
                    
                       <div>
                       <img src={google} alt=""
                       style={{width:"100px"}}/>
                       </div>
                       <div>
                       <Button onClick={handleGoogleLogIn}  className="btn btn-primary btn-lg mt-4">Sign in Using Google</Button>
                       </div>

                       </div >
                   
            </div>

          
    );
};

export default Login;