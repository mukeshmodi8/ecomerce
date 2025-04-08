import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../Pages/AuthProvider';
// import { auth } from '../Pages/AuthProvider'

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const { login } = useAuth();

    async function loginHandler(data) {
        const { email, password } = data;
        try {
            await login(email, password);
            Swal.fire({
                title: 'Log in Successful',
                icon: 'success',
                text: 'Press Ok to continue'
            });
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

                <form onSubmit={handleSubmit(loginHandler)}>
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
                        <Link className="text-primary text-decoration-none ms-1" to="/signup">Signup</Link>
                    </p>

                    <button className="btn btn-outline-success w-100" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
