import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../common/Footer';
import HeaderBlack from '../common/HeaderBlack';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Ke9ZdJO1wHwB6sYi2RliY81wccfMDfQOcVj1cntcHqrkzMn5sikW1b1q8vyNc1ZLMoKR4pCg9CV3bTvcMw6HVPc008udG1NI8')

const Payment = () => {
    const { orderId } = useParams();
    const [orders, setOrders] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${orderId}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orderId]);
    return (
        <div>
            <HeaderBlack></HeaderBlack>
           <div className='my-16'> 
            <h2>Please Pay for: {orderId} for {orders.foodName}</h2>
            <h4>Pay: ${orders.price}</h4>
            {orders?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                   
                >
                </CheckoutForm>
            </Elements>}</div>
            <Footer></Footer>
        </div>
    );
};

export default Payment;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-----
5. Create payment method
6. server: create payment Intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error
*/