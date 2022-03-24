import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { FlapperSpinner } from "react-spinners-kit";
import useFirebase from '../Hooks/useFirebase';

const CheckoutForm = ({ order }) => {
    const { price,totalPrice, _id } = order;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useFirebase();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        }
        else {
            setError('');
            console.log(paymentMethod);
        }

        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
            setSuccess('Your payment processed successfully.')
            console.log(paymentIntent);
            setProcessing(false);
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `http://localhost:5000/orders/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }

    }
    return (
        <div className='mt-16 px-32 '>
            <img className='mb-2' src="https://i.ibb.co/YQfRDMW/Screenshot-2022-03-24-002706.png" alt="ok" width="500" height="600"></img>
            <form onSubmit={handleSubmit}>
            <label class="mb-8 block text-gray-700 text-xl font-bold" for="card">
        Enter your card number to pay your bill.
      </label>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#6a329f',
                                letterSpacing: '0.025em',
                                '::placeholder': {
                                    color: '#0b9dcb',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? 
                <FlapperSpinner className="mt-8" size={40} color="#686769" />: <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12 text-xl'  type="submit" disabled={!stripe || success}>
                    Pay {totalPrice} $
                </button>}
            </form>
            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
            {
                success && <p className='font-bold text-green-700 mt-12 text-xl'>{success}</p>
            }
        </div>
    );
};

export default CheckoutForm;