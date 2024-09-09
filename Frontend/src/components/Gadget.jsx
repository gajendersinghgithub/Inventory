import React, { useState } from 'react';

function Gadget({ itemImage, itemImage2, itemImage3, itemImage4, itemRatingStars, itemRatingCount, itemName, itemCurrentPrice, itemOriginalPrice, discount, modalId }) {
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
        <dialog id={modalId} className="modal">
            <div className="modal-box w-full h-auto max-w-screen-lg p-4">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h1 className='text-center text-xl my-2 font-bold'>Product Description</h1>
                <div className="flex flex-col md:flex md:flex-row">
                    <figure>
                      <div className="carousel w-full">
                        <div id={`slide1_${modalId}`} className="carousel-item relative w-full">
                          <img
                            src={itemImage}
                            className="w-full md:w-[3200px] md:h-[400px]" />
                          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={`#slide4_${modalId}`} className="btn btn-circle">❮</a>
                            <a href={`#slide2_${modalId}`} className="btn btn-circle">❯</a>
                          </div>
                        </div>
                        <div id={`slide2_${modalId}`} className="carousel-item relative w-full">
                          <img
                            src={itemImage2}
                            className="w-full" />
                          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={`#slide1_${modalId}`} className="btn btn-circle">❮</a>
                            <a href={`#slide3_${modalId}`} className="btn btn-circle">❯</a>
                          </div>
                        </div>
                        <div id={`slide3_${modalId}`} className="carousel-item relative w-full">
                          <img
                            src={itemImage3}
                            className="w-full" />
                          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={`#slide2_${modalId}`} className="btn btn-circle">❮</a>
                            <a href={`#slide4_${modalId}`} className="btn btn-circle">❯</a>
                          </div>
                        </div>
                        <div id={`slide4_${modalId}`} className="carousel-item relative w-full">
                          <img
                            src={itemImage4}
                            className="w-full" />
                          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={`#slide3_${modalId}`} className="btn btn-circle">❮</a>
                            <a href={`#slide1_${modalId}`} className="btn btn-circle">❯</a>
                          </div>
                        </div>
                      </div>


                      {/* <img
                                      className='w-[2040px]'
                                      src={itemImage}
                                      alt="Shoes" /> */}
                    </figure>
                  <div className="card-body">
                    <p>{itemRatingStars} ⭐| {itemRatingCount}k</p>
                    <h1 className="card-title md:text-2xl">{itemName}</h1>
                    <h3>This white shirt features an adorable graphic of a dog peacefully napping, capturing the essence of pure relaxation. The accompanying text, "Nothing is better than a nap with a dog," perfectly conveys the cozy comfort and joy of spending time with your furry friend. Made from soft, breathable fabric, this shirt combines style and comfort, making it a perfect choice for lounging or casual outings. Embrace the warmth of your pet's company with this charming design.</h3>
                    <p></p>
                    <h1 className='font-bold text-2xl my-2'>₹{itemCurrentPrice} <span className='font-thin line-through text-gray-600'>₹{itemOriginalPrice}</span> <span className='font-normal text-orange-500'>({discount}% OFF)</span></h1>
                    <div className='flex flex-row justify-between items-center my-2'>
                      <h3 className='font-bold text-lg'>Quantity: </h3>
                      <button className='bg-slate-200 px-6 py-2' onClick={decreaseCount}>-</button>
                      <h1 className=''>{count}</h1>
                      <button className='bg-slate-200 px-6 py-2' onClick={increaseCount}>+</button>
                    </div>
                    <div className="card-actions justify-center">
                      <button className="btn btn-block bg-yellow-500" onClick={() => alert(`Added ${count} items to the cart`)}>Add {count} item to cart</button>
                    </div>
                  </div>
                </div>
            </div>
        </dialog>
    </div>
  )
}

export default Gadget;
