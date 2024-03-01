import React from 'react'

export const Rating = () => {
    return (
        <>
            <div className=' w-1/4  flex  justify-center items-start' >

                <div className="flex-col ">

                    <h3 className='text-2xl'>
                        Ulasan Pembeli
                    </h3>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                    </div>
                    <div>

                        <h4 className='text-2xl text-accent'>
                            <span className='text-4xl text-black'>5.0</span>/5.0
                        </h4>
                    </div>
                </div>

            </div>
        </>
    )
}
