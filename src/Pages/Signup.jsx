import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, googleProvider } from '../../Firebase'; // ✅ Make sure googleProvider export किया हो
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

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
            reset();
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

    const handleGoogleSignup = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            Swal.fire({
                title: 'Signed up with Google!',
                icon: 'success',
                text: 'Redirecting to home...'
            });
            navigate('/home');
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Google Signup Failed',
                icon: 'error',
                text: error.message
            });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100"
            style={{
                background: 'linear-gradient(to right, #667eea, #764ba2)',
                padding: '20px'
            }}
        >
            <div className="col-12 col-md-8 col-lg-5 p-4 rounded-4 text-white"
                style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                }}
            >
                <h2 className="text-center mb-4 fw-bold">Create Account</h2>

                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control bg-transparent text-white border-light"
                            {...register('email', { required: true })}
                            placeholder="Enter Your Email"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control bg-transparent text-white border-light"
                            {...register('password', { required: true })}
                            placeholder="Enter Your Password"
                        />
                    </div>

                    <p className="text-white">
                        Already have an account?
                        <Link className="text-warning ms-1 text-decoration-none" to="/login">Login</Link>
                    </p>

                    <button className="btn btn-outline-light w-100 mb-3" type="submit">Signup</button>
                </form>

                <div className="text-center">
                    <p className="my-3">or</p>

                    <button
                        onClick={handleGoogleSignup}
                        className="btn w-100 mb-2 d-flex align-items-center justify-content-center gap-2"
                        style={{
                            backgroundColor: '#ffffff',
                            color: '#000',
                            border: '1px solid #ccc',
                        }}
                    >
                        <i className="fab fa-google text-danger"></i> Continue with Google
                    </button>

                    <button
                        className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                        style={{
                            backgroundColor: '#1877F2',
                            color: '#fff',
                            border: 'none',
                        }}
                    >
                        <i className="fab fa-facebook-f"></i> Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
