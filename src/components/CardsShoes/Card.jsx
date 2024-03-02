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




