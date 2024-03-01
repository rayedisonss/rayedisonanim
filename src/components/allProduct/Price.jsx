import React, { useEffect, useState } from 'react'

export const Price = () => {

    // const [range, setRange] = useState(100)
    // let [price, setPrice] = useState(1)

    // useEffect(() => {
    //     if (range == 50) {
    //         setPrice = "Hai"
    //     }
    // })


    return (
        <>
            {/* <h3>{range}</h3> */}
            <input type="range" name="price" id="price" className='range range-primary' max="100" step="50" defaultValue={100}

            // onChange={(e) => setRange(price = e.target.defaultValue)} 

            />
            <div className="w-full flex justify-between text-xs px-2">
                <span>100K - 200K</span>

                <span>300K - 600K</span>

                <span>600K - 1 Juta</span>
            </div>

        </>
    )
}
