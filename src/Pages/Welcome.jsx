import React from 'react';
import shop from '../Pages/image/shop.jpg';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className=" welcome container d-flex justify-content-center align-items-center min-vh-100 welcome-container">
            <div className="col-12 col-md-8 col-lg-6 p-4 rounded shadow bg-white text-center">
                <img src={shop} alt="Culinary Adventure" className="img-fluid rounded mb-3" />
                
                <h1 className="welcome-title">
                    Welcome To <br /> Arbuda Mobile
                </h1>
                <p className="welcome-text">
                    Thank You For Visit <br /> Arbuda Mobile Shop.
                </p>
                
                <a href='/signup' className="btn btn-primary w-100 mt-3">
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Welcome;
