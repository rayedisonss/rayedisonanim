import React from 'react'

export const Card = ({ name, description, nameImage }) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl border">
                <figure className="px-10 pt-10">
                    <img src={"/image/" + nameImage} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary text-black">Selengkapnya</button>
                    </div>
                </div>
            </div>

        </>
    )
}






// <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//     <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
//         <img src={"/image/" + nameImage} alt="profile-picture" />
//     </div>
//     <div class="p-6 text-center">
//         <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//             {/* NAME */}
//             {name}
//             {/* Natalie Paisley */}
//         </h4>
//         <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
//             {/* Price */}
//             {price}
//             {/* CEO / Co-Founder */}
//         </p>
//     </div>

// </div>