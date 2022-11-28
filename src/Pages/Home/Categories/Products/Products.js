
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import Product from "./Product";


const Products = () => {

    const products = useLoaderData();

    const [item, setItem] = useState(null);




    return (
        <div>
            <h2 className="text-3xl font-bold mt-5">All Products</h2>
            <div className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setItem={setItem}
                    >
                    </Product>)
                }
            </div>
            {
                item &&
                <BookingModal
                    item={item}
                    setItem={setItem}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;



