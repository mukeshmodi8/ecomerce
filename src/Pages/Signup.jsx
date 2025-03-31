import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    async function handleSignup(data) {
        const { email, password } = data;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Swal.fire({
                title: 'Signup Successful',
                icon: 'success',
                text: 'Please login to continue'
            });
            navigate('/login');
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Signup Failed',
                icon: 'error',
                text: error.message
            });
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row w-100">
                <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
                    <div className="shadow rounded p-4 bg-white text-center">
                        <h2 className="text-primary mb-4">Create Account</h2>
                        <form onSubmit={handleSubmit(handleSignup)}>
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
                                Already have an account? 
                                <a className="text-primary text-decoration-none ms-1" href="/login">Login</a>
                            </p>
                            <button className="btn btn-outline-primary w-100" type="submit">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
