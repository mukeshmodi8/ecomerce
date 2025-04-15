import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { useCart } from "./CartContext"; // ✅ Cart data access

const Payment = () => {
  const { cart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const amount = getTotalPrice();

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="text-success">💳 Complete Your Payment</h2>
        <p className="text-muted">Scan the QR Code using Paytm or any UPI App</p>
      </div>

      <div className="row justify-content-center align-items-center">
        {/* QR Code */}
        <div className="col-md-5 text-center">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=1234567890@paytm&pn=MrHappy&am=${amount}`}
            alt="Paytm QR"
            className="img-fluid border p-2 shadow"
          />
          <p className="mt-3">
            <strong>Pay via UPI:</strong> 1234567890@paytm
          </p>
        </div>

        {/* Payment Summary */}
        <div className="col-md-5 bg-light p-4 rounded shadow">
          <h4 className="mb-4 text-primary d-flex align-items-center">
            <SiPaytm className="me-2" /> Paytm Payment Details
          </h4>
          <ul className="list-group list-group-flush text-start mb-3">
            <li className="list-group-item">
              <strong>Receiver:</strong> Mr. Happy
            </li>
            <li className="list-group-item">
              <strong>UPI ID:</strong> 1234567890@paytm
            </li>
            <li className="list-group-item">
              <strong>Amount:</strong>{" "}
              <FaRupeeSign className="text-success" /> {amount}
            </li>
            <li className="list-group-item">
              <strong>Status:</strong>{" "}
              <span className="text-warning">Awaiting Payment...</span>
            </li>
          </ul>
          <div className="text-center mt-3">
            <button className="btn btn-success px-4" disabled>
              Waiting for Payment...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
