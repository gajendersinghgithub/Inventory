import React, { useEffect, useState } from 'react';
import axios from "axios";
import Gadget from './Gadget.jsx';

function Gadgets() {
    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        const getGadgets = async () => {
            try {
                const res = await axios.get("http://localhost:3000/gadget");
                console.log(res.data);
                setGadgets(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getGadgets();
    }, []);
    return (
        <div className='font-serif'>
            <h2 className='text-center py-3 text-2xl font-bold'>Our Gadget's Store</h2>
            <div className='products'>
                {gadgets.map((item) => {
                    let discountPrice = (item.original_price - item.current_price) / item.original_price;
                    const discount = Math.round(discountPrice * 100);
                    const modalId = `my_modal_${item.id}`;

                    return (
                        <div key={item.id} className="card card-compact bg-base-100 w-auto md:w-96 my-2 shadow-xl">
                            <figure>
                                <img
                                    src={item.image}
                                    alt="T-shirt" />
                            </figure>
                            <div className="card-body">
                                <p>{item.rating.stars} ⭐| {item.rating.count}k</p>
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.brand}</p>
                                <h2 className='font-bold text-xl'>₹{item.current_price}<span className='font-thin line-through mx-2 text-gray-600 font-mono'>₹{item.original_price}</span> <span className='font-normal text-orange-500'>({discount}% OFF)</span></h2>
                                <div className="card-actions justify-center">
                                        <button className="btn btn-block bg-green-500" onClick={ () => document.getElementById(modalId).showModal()}>Buy Now</button>
                                        <Gadget
                                            itemImage = {item.image}
                                            itemImage2 = {item.image2}
                                            itemImage3 = {item.image3}
                                            itemImage4 = {item.image4}
                                            itemRatingStars = {item.rating.stars}
                                            itemRatingCount = {item.rating.count}
                                            itemName = {item.name}
                                            itemCurrentPrice = {item.current_price}
                                            itemOriginalPrice = {item.original_price}
                                            discount = {discount}
                                            modalId = {modalId}
                                        />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Gadgets;
