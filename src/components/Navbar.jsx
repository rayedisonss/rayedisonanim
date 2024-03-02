import React from 'react'
import { useNavigate } from 'react-router-dom'





export const Navbar = ({ top }) => {

    const navigate = useNavigate();

    return (
        <>
            <nav className={`navbar ${top ? "absolute z-10" : null}   bg-primary flex`}>
                <div className="container mx-auto sm:flex-row flex-col">

                    <div className="navbar-start sm:text-left flex flex-row sm:justify-start justify-center gap-3 ">
                        <button onClick={() => { navigate('/') }} className="text-2xl font-bold gap-1 flex items-center pe-3"><img src="/logoReshop.png" alt="" className='w-12' />Eshop</button>

                        <ul className=" ps-4 items-center flex">
                            <li className='font-semibold'>
                                <button className='btn btn-ghost' onClick={() => { navigate('/allproducts') }}>Semua Produk</button>
                            </li>
                            <li className='font-semibold'>
                                <button className='btn btn-ghost' onClick={() => { navigate('/about') }}>Tentang Kita</button>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-end flex gap-1 items-center sm:flex-row flex-col mt-3">

                        <div className='flex'>

                            <div className="form-control">
                                <input type="text" placeholder="Cari" className="input input-bordered w-full md:w-auto" />
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Profile Pict" src="/image/ProfilePict.jpeg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a onClick={() => { navigate('/profile') }}>Profile</a></li>
                                    <li><a onClick={() => { navigate('/cart') }}>Keranjang <div className="badge badge-secondary">4 Barang</div></a></li>
                                    <li><a>Keluar</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>



        </>
    )
}




