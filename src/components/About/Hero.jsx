import React from 'react'

export const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(/image/tower.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-2xl sm:text-5xl font-bold">REshop</h1>
                    <p className="mb-5 text-xl sm:text-2xl"> REshop adalah perusahaan sepatu Indonesia dengan misi memberi manfaat bagi semua orang </p>
                </div>
            </div>
        </div>
    )
}
