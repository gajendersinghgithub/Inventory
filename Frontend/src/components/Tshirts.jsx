import React, { useEffect, useState } from 'react';
import './Products.css';
import axios from "axios";
import Tshirt from './Tshirt.jsx';


function Tshirts() {
    const [tshirt, setTshirt] = useState([]);
    useEffect(() => {
        const getTshirt = async () => {
            try {
                const res = await axios.get("http://localhost:3000/tshirt");
                console.log(res.data);
                setTshirt(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getTshirt();
    }, []);
    return (
        <div className='font-serif'>
            <h2 className='text-center py-3 text -xl md:text-2xl font-bold'>Our T-Shirts's Collection</h2>
            <div className='products'>
                {tshirt.map((item) => {
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
                                <h2 className="card-title">{item.item_name}</h2>
                                <p>{item.company}</p>
                                <h2 className='font-bold text-xl'>₹{item.current_price}<span className='font-thin line-through mx-2 text-gray-600 font-mono'>₹{item.original_price}</span> <span className='font-normal text-orange-500'>({discount}% OFF)</span></h2>
                                <div className="card-actions justify-center">
                                        <button className="btn btn-block bg-green-500" onClick={ () => document.getElementById(modalId).showModal()}>Buy Now</button>
                                        <Tshirt 
                                            itemImage = {item.image}
                                            itemImage2 = {item.image2}
                                            itemImage3 = {item.image3}
                                            itemImage4 = {item.image4}
                                            itemRatingStars = {item.rating.stars}
                                            itemRatingCount = {item.rating.count}
                                            itemName = {item.item_name}
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

export default Tshirts;
