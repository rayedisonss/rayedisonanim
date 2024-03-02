import React from 'react'

export const PriceCart = () => {
    return (
        <div className="card w-96 h-fit bg-base-100 shadow-xl border sticky top-0">
            <div className="card-body flex gap-4 justify-center">
                <h2 className="card-title ">Total</h2>
                <div className="flex flex-col">

                    <div className="flex justify-between">
                        <h3 className='text-black '>Sneakers 2.0</h3>
                        <h2 className='font-bold'>Rp1.899.000</h2>
                    </div>
                    <div className="flex justify-between">
                        <h3 className='text-black'>Air Max 2023</h3>
                        <h2 className='font-bold'>Rp2.699.000</h2>
                    </div>
                    <div className="flex justify-between">
                        <h3 className='text-black'>Triumph 19</h3>
                        <h2 className='font-bold'>Rp2.399.000</h2>
                    </div>
                    <div className="flex justify-between">
                        <h3 className='text-black'>Air Jordan</h3>
                        <h2 className='font-bold'>Rp1.200.000</h2>
                    </div>

                </div>
                <div className="divider"></div>

                <div className="flex justify-between">
                    <h3 className='text-accent'>Subtotal</h3>
                    <h2 className='font-bold'>Rp8.197.000</h2>
                </div>

                <div className="card-actions justify-center">

                    <button className="btn btn-secondary w-full" onClick={() => { alert("Terima Kasih sudah Membeli Produk dari REShop") }}>Beli</button>
                </div>
            </div>
        </div>
    )
}
