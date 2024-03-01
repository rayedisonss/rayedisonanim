import React from 'react'

export const Tab = () => {
    return (
        <div>
            <div>

                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Detail" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <h3 className='text-md'>Kondisi: <span className='font-bold'>Baru</span></h3>
                        <h3 className='text-md'>Min. Pemesanan: <span className='font-bold'> 1 Buah</span></h3>
                        <h3 className='text-md'>Etalase: <span className='font-bold'> Air Jordan </span></h3>

                        <p>
                            Size chart : <br />
                            40 EUR - 7 US - 25 cm<br />
                            41 EUR - 8 US - 26 cm<br />
                            42 EUR - 8.5 US - 26.5 cm<br />
                        </p>



                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Penting" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 ">
                        <div className="flex gap-5 flex-col">

                            <div className=''>

                                <h3 className='font-bold'>Kebijakan Pengembalian Produk</h3>
                                <h4>Syarat & Ketentuan Garansi Tukar Size. Jam Operational Admin Komplain 10 am - 5 pm</h4>
                            </div>
                            <div className=''>

                                <h3 className='font-bold'>Mengapa harus beli di REShop?</h3>
                                <h4>Terpercaya sejak 2024 JUJUR dan AMANAH Harga Terjangkau di pasaran</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
