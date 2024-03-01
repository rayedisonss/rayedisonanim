import React from 'react'
import { Price } from './allProduct/Price'
import { CategoryCheck } from './allProduct/CategoryCheck'

export const Sidebar = () => {
    return (

        <div className="drawer flex justify-center">
            <input id="my-drawer" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content container flex justify-between p-4 items-center ">
                {/* Page content here */}
                <div className="start">
                    <h1 className='text-2xl font-bold'>Semua Produk</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <label htmlFor="my-drawer" className="btn btn-secondary drawer-button">Kategori</label>

                    <select className="select select-secondary w-full max-w-xs">
                        <option disabled selected>Sortir</option>
                        <option>Terbaru</option>
                        <option>Trending</option>
                        <option>Harga Termurah</option>
                        <option>Harga Termahal</option>
                    </select>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <h2 className='text-center py-2 text-bold'>Harga</h2>
                    <Price />


                    <div className="divider"></div>
                    <h2 className='text-center py-2 text-bold'>Olahraga</h2>
                    <CategoryCheck />

                </ul>
            </div>
        </div>
    )
}
