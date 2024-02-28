import React from 'react'

export const Header = ({ title, description }) => {
    return (
        <>

            <div className="p-5 mt-3 flex justify-center items-center">
                <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
                <h3 className='text-2xl font-bold text-color-primary'>{description}</h3>
            </div>
        </>
    )
}
