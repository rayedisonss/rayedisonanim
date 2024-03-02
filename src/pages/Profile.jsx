import React from 'react'
import { Navbar } from '../components/Navbar'
import { ProfileForm } from '../components/Profile/ProfileForm'

export const Profile = () => {
    return (
        <>
            <Navbar />

            <div className=" flex justify-center items-center flex-col gap-5 pt-8">

                <h5 className="text-2xl font-bold ">Welcome Ray Edison </h5>

                <img src='/image/ProfilePict.jpeg' alt="Foto Profile" className='rounded-full w-36' />

                <ProfileForm />


            </div>
        </>
    )
}
