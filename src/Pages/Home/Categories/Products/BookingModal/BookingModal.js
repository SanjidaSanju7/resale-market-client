import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ item, setItem }) => {

    const { user } = useContext(AuthContext)
    const { name } = item;


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const itemName = form.itemName.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(name, itemName, email, price, phone, location);

        const booking = {
            image,
            userName: name,
            itemName,
            email,
            price,
            phone,
            location
        }

        fetch('https://resale-market-server-side-nu.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setItem(null);
                    toast.success('The item is booked');

                }
                else {
                    toast.error(data.message);
                }
            })



    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} readOnly disabled className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email Address" defaultValue={user?.email} readOnly disabled className="input w-full input-bordered" />
                        <input name='itemName' type="text" placeholder="Item Name" value={item?.name} readOnly disabled className="input w-full input-bordered" />
                        <input name='price' type="text" placeholder="Price" value={item?.resalePrice} readOnly disabled className="input w-full input-bordered" />
                        <input name='image' type="text" placeholder="Image Url"
                            value={item?.image} readOnly disabled className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input type="submit" value="submit" className='btn btn-sm gradient-color w-full ' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;