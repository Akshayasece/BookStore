import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import './PaymentPage.css';
import PaymentImg from "./PaymentImg.jpeg"; 
import Qrcode from './Qrcode.jpeg';

function PaymentPage() {
  const { id } = useParams();  
  const [stripe, setStripe] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("pending");
  const navigate = useNavigate();

  useEffect(() => {
    const loadStripeInstance = async () => {
      const stripe = await loadStripe("Payment"); 
      setStripe(stripe);
    };
    loadStripeInstance();
  }, []);

  const handlePaymentMethodChange = (event) => {
    const selectedMethod = event.target.value;
    console.log("Selected Payment Method:", selectedMethod);
  };

  const handlePayment = async () => {
    if (!stripe) return; 
    try {
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: "price_1J7ks6BaqZaqzTKy3GRcKn3k", quantity: 1 }],
        mode: 'payment',
        successUrl: 'http://localhost:5173/success',
        cancelUrl: 'http://localhost:5173/cancel',
      });
      if (error) {
        console.error("Error during payment:", error);
        setPaymentStatus("failed"); 
      } else {
        setPaymentStatus("completed"); 
      }
    } catch (error) {
      console.error("Error during payment:", error);
      setPaymentStatus("failed"); 
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="payment-container">
      <div className="payment-layout">
        <div className="payment-image">
          <img src={PaymentImg} alt="Payment" />
        </div>
        <div className="payment-form">
          <h2>Payment Page</h2>
          <p>Book ID: {id}</p>
          <div>
            <select onChange={handlePaymentMethodChange}>
              <option value="">Select Payment Method</option>
              <option value="credit_card">Credit Card</option>
              <option value="debit_card">Debit Card</option>
              <option value="online_payment">Online Payment</option>
            </select>
            <button className="butt" onClick={handlePayment}>Make Payment</button>
          </div>
          <p className={`payment-status ${paymentStatus === "pending" ? "red-text" : ""}`}>
            Payment Status: {paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1)}
          </p>
          <div>
            <button className="backbutton" onClick={handleGoBack}>Back</button>
          </div>
        </div>
        <div className="payment-logo">
          <img src={Qrcode} alt="Payment" />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
