import React from 'react'
import { useNavigate } from 'react-router-dom'





export const Navbar = ({ top }) => {

    const navigate = useNavigate();

    return (
        <>
            <nav className={`navbar ${top ? "absolute z-10" : null}   bg-primary`}>
                <div className="container ">

                    <div className="navbar-start">
                        <button onClick={() => { navigate('/') }} className="btn btn-ghost text-xl">REShop</button>
                    </div>

                    <div className="navbar-end flex gap-1 items-center">
                        <ul className="menu menu-horizontal px-1 items-center">
                            <li className='font-semibold'>
                                <button className='btn btn-ghost' onClick={() => { navigate('/shops') }}>Shop</button>
                            </li>
                            <li className='font-semibold'>
                                <button className='btn btn-ghost' onClick={() => { navigate('/shops') }}>FAQ</button>
                            </li>
                        </ul>
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li><a>Profile</a></li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>



        </>
    )
}






// <nav class="bg-gray-800 sticky top-0">
//     <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  justify-center items-center">
//         <div class="relative flex h-16 items-center justify-between">

//             <div class="flex flex-1 items-center justify-start sm:items-stretch ">
//                 <div class="flex flex-shrink-0 items-center sm:text-left text-center">
//                     <a href="#" className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'> RayShop</a>
//                 </div>
//                 <div class=" sm:ml-6 sm:block hidden">
//                     <div class="flex space-x-4 ">
//                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Desktop</a>
//                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Product</a>
//                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>

//     {/* <!-- Mobile menu, show/hide based on menu state. --> */}
//     <div class="sm:hidden text-center" id="mobile-menu">
//         <div class="space-y-1 px-2 pb-3">

//             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Mobile</a>
//             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Product</a>
//             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
//         </div>
//     </div>
// </nav>