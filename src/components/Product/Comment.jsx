import React from 'react'

export const Comment = () => {
    return (


        <>
            <div className="flex flex-col gap-4 w-3/4  ">
                <div className="title">

                    <h3 className='text-3xl'>Ulasan</h3>
                </div>



                {/* KOMENTAR */}
                <div className='flex flex-col gap-4'>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                        <div className='text-accent ps-2'>

                            <h3>2 Minggu Lalu</h3>
                        </div>
                    </div>


                    <div className=" flex items-center gap-2">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>

                        <h3 className='text-xl'>Slamet Kopling</h3>

                    </div>
                    <div className="">
                        <p>Mantap, barang nya sampai dengan selamat</p>
                    </div>

                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-md ">
                            Lihat Balasan
                        </div>
                        <div className="collapse-content">
                            <div className=" flex items-center gap-2">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <h3 className='text-md'>Ray Edison <div className="badge badge-secondary">Admin</div></h3>
                            </div>
                            <p>Terima kasih masbro</p>

                        </div>
                    </div>
                </div>

                <div className="divider"></div>
                <div className='flex flex-col gap-4'>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked disabled />
                        <div className='text-accent ps-2'>

                            <h3>2 Minggu Lalu</h3>
                        </div>
                    </div>


                    <div className=" flex items-center gap-2">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>

                        <h3 className='text-xl'>Windah Basudara</h3>

                    </div>
                    <div className="">
                        <p>Mantap, barang nya sampai dengan selamat</p>
                    </div>

                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-md ">
                            Lihat Balasan
                        </div>
                        <div className="collapse-content">
                            <div className=" flex items-center gap-2">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <h3 className='text-md'>Ray Edison <div className="badge badge-secondary">Admin</div></h3>
                            </div>
                            <p>Terima kasih masbro</p>

                        </div>
                    </div>
                </div>

                <div className="divider"></div>





            </div>
        </>
    )
}
