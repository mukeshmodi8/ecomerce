import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import { auth } from '../../firebase';
import Swal from 'sweetalert2';
import { auth } from '../../firebase';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    async function login(data) {
        const { email, password } = data;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Swal.fire({
                title: 'Log in Successful',
                icon: 'success',
                text: 'Press Ok to continue'
            });;
            reset();
            navigate('/home');
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="col-12 col-md-8 col-lg-6 p-4 rounded shadow bg-white text-center">
                
                <h2 className="text-center text-primary mb-4">Please Login</h2>
                
                <form onSubmit={handleSubmit(login)}>
                    <div className="mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            {...register('email', { required: true })} 
                            placeholder="Enter Your Email" 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="password" 
                            className="form-control" 
                            {...register('password', { required: true })} 
                            placeholder="Enter Your Password" 
                        />
                    </div>

                    <p>
                        Don't have an account? 
                        <a className="text-primary text-decoration-none ms-1" href="/signup">Signup</a>
                    </p>

                    <button className="btn btn-outline-success w-100" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
