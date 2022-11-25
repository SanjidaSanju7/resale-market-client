import React from 'react';

const BookingModal = ({ item, setItem }) => {

    const { name } = item
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const itemName = form.itemName.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(name, itemName, email, price, phone, location);

        const booking = {
            userName: name,
            itemName,
            email,
            price,
            phone,
            location
        }
        console.log(booking);
        setItem(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='itemName' type="text" placeholder="Item Name" className="input w-full input-bordered" />
                        <input name='price' type="text" placeholder="Price" className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder="Location" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input type="submit" value="submit" className='btn btn-sm btn-outline w-full ' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;