import { Chat, Heart, Share } from '@phosphor-icons/react';
import React, { useState } from 'react'

export const CardPrice = () => {

    const [counter, setCounter] = useState(0);

    // Function is called everytime increment button is clicked
    const increase = () => {
        // Counter state is incremented
        setCounter(counter + 1);
    };

    // Function is called everytime decrement button is clicked
    const decrease = () => {
        // Counter state is decremented
        setCounter(counter - 1);
    };


    return (
        <div className="card w-96 h-fit bg-base-100 shadow-xl border sticky top-0">
            <div className="card-body flex gap-4 justify-center">
                <h2 className="card-title">Atur Jumlah dan Catatan</h2>

                <div className='flex gap-2 justify-center'>
                    <button className="btn btn-primary" onClick={decrease}>-</button>
                    <span className="p-3 ">{counter}</span>
                    {/* <span className="p-3 ">{counter}</span> */}
                    <button className="btn btn-primary" onClick={increase}>+</button>
                </div>

                <textarea className="textarea textarea-secondary" placeholder="Catatan"></textarea>

                <div className="divider"></div>

                <div className="flex justify-between">
                    <h3 className='text-accent'>Subtotal</h3>
                    <h2 className='font-bold'>Rp390.000</h2>
                </div>

                <div className="card-actions justify-center">
                    <button className="btn btn-primary w-full">+ Keranjang </button>
                    <button className="btn btn-secondary w-full">Beli</button>
                </div>


                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box flex justify-center items-center">
                    <li>
                        <a><Chat size={15} />Inbox</a>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <a><Heart size={15} />Wishlist</a>
                    </li>
                    <li>
                        <a><Share size={15} />Share</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
