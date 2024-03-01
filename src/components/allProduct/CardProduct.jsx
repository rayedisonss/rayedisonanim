import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CardProduct = () => {
    const navigate = useNavigate()

    return (
        <div className="container mx-auto">

            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">

                <div className=" border-2 text-color-accent  p-2 rounded " >
                    <a onClick={() => navigate('/product')} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
                        <img
                            src={"/image/product/shoes1.png"}
                            alt="Sepatu saya"
                            width={350}
                            height={350}
                            className="w-full max-h-96 object-cover" />
                        <div className=' p-4 '>
                            <h3 className="md:text-xl text-md font-bold">Air Jordan</h3>
                            <h4>Sepatu Olahraga</h4>
                            <h4>1 Warna</h4>
                            <h3 className="md:text-xl text-md font-semibold">Rp1.200.000</h3>

                        </div>
                    </a>
                </div>
                <div className=" border-2 text-color-accent  p-2 rounded " >
                    <a onClick={() => navigate('/product')} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
                        <img
                            src={"/image/product/shoes2.png"}
                            alt="Sepatu saya"
                            width={350}
                            height={350}
                            className="w-full max-h-96 object-cover" />
                        <div className=' p-4 '>
                            <h3 className="md:text-xl text-md font-bold">Air Max 2023</h3>
                            <h4>Sepatu lari </h4>
                            <h4>2 Warna</h4>
                            <h3 className="md:text-xl text-md font-semibold">Rp2.699.000</h3>

                        </div>
                    </a>
                </div>
                <div className=" border-2 text-color-accent  p-2 rounded " >
                    <a onClick={() => navigate('/product')} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
                        <img
                            src={"/image/product/shoes3.png"}
                            alt="Sepatu saya"
                            width={350}
                            height={350}
                            className="w-full max-h-96 object-cover" />
                        <div className=' p-4 '>
                            <h3 className="md:text-xl text-md font-bold">Takeshi Sen 9</h3>
                            <h4>Sneakers</h4>
                            <h4>1 Warna</h4>
                            <h3 className="md:text-xl text-md font-semibold">Rp1.899.000</h3>

                        </div>
                    </a>
                </div>
                <div className=" border-2 text-color-accent  p-2 rounded " >
                    <a onClick={() => navigate('/product')} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
                        <img
                            src={"/image/product/shoes4.png"}
                            alt="Sepatu saya"
                            width={350}
                            height={350}
                            className="w-full max-h-96 object-cover" />
                        <div className=' p-4 '>
                            <h3 className="md:text-xl text-md font-bold">Triumph 19</h3>
                            <h4>Snekers</h4>
                            <h4>2 Warna</h4>
                            <h3 className="md:text-xl text-md font-semibold">Rp2.399.000</h3>

                        </div>
                    </a>
                </div>
                <div className=" border-2 text-color-accent  p-2 rounded " >
                    <a onClick={() => navigate('/product')} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
                        <img
                            src={"/image/product/shoes5.png"}
                            alt="Sepatu saya"
                            width={350}
                            height={350}
                            className="w-full max-h-96 object-cover" />
                        <div className=' p-4 '>
                            <h3 className="md:text-xl text-md font-bold">Air Jordan</h3>
                            <h4>Sepatu Olahraga</h4>
                            <h4>1 Warna</h4>
                            <h3 className="md:text-xl text-md font-semibold">Rp1.200.000</h3>

                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}
