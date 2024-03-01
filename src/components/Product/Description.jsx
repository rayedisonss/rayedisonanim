import React from 'react'
import { Tab } from './Tab'
import { Radio } from './Radio'
import { MapPin, Truck } from '@phosphor-icons/react'

export const Description = () => {
    return (
        <>
            <main className='' style={{ width: "28rem" }}>

                <h1 className='text-xl font-bold'>Air Jordan - Sport Shoes</h1>
                <div className='flex flex-col gap-3'>
                    <h2>Terjual <span className='text-accent'>4 rb+</span></h2>

                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled checked />
                    </div>
                </div>
                <br />
                <h1 className='text-3xl font-bold'>Rp300.000</h1>
                <div className="divider"></div>

                <h3 className='font-semibold'>Pilih Warna : </h3>

                <Radio />

                <div className="divider"></div>

                <Tab />

                <div className="divider"></div>

                <div className='flex flex-col gap-5'>

                    <h2 className="font-bold text-xl">Pengiriman</h2>

                    <div className="flex flex-col gap-2" >
                        <div className='flex items-center gap-1'>
                            <MapPin size={22} />
                            <h3>Dikirim dari <span className='font-bold'>Jakarta Barat</span></h3>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Truck size={22} />
                            <h3>Ongkir Reguler 8 rb - 10 rb</h3>
                        </div>
                    </div>
                </div>




            </main>
        </>
    )
}
