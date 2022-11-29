import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const booking = useLoaderData()
    const navigation = useNavigation()
    const { price } = booking;
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl font-bold mt-5'>Payment for {booking.itemName}</h2>
            <p>Please pay <strong>${price} </strong>for booking your product</p>
            <div className='w-96 my-16'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;