import { FileSearch } from '@phosphor-icons/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen max-w-xl mx-auto flex justify-center items-center'>
            <div className="flex flex-col justify-center items-center gap-4">
                <FileSearch size={64} className='text-color-accent' />
                <h3 className='text-color-accent text-4xl font-bold '>Not Found</h3>
                <button onClick={() => { navigate('/') }} className='text-color-primary hover:text-color-accent transition-all underline'>Kembali</button>
            </div>
        </div>
    )
}

