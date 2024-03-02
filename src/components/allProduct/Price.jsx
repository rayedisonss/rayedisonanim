import React, { useEffect, useState } from 'react'

export const Price = () => {


    return (
        <>

            <input type="range" name="price" id="price" className='range range-primary' max="100" step="50" defaultValue={100}

            />
            <div className="w-full flex justify-between text-xs px-2">
                <span>100K - 200K</span>

                <span>300K - 600K</span>

                <span>600K - 1 Juta</span>
            </div>

        </>
    )
}
