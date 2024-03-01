import React from 'react'
import { Card } from './Card'


export const CardGroup = () => {
    return (

        <>
            <div className="container mx-auto">

                <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-3'>
                    <Card name={"Sport Shoes"} description={"Kenyamanan, Stabilitas, dan Performa"} nameImage={"trendShoes1.png"} />
                    <Card name={"Air Jordan"} description={"Gaya Ikonik untuk Generasi Z"} nameImage={"trendShoes2.png"} />
                    <Card name={"Lifestyle Shoes"} description={"Sepatu untuk Gaya dan Kenyamanan"} nameImage={"trendShoes3.png"} />


                </div>
            </div>



        </>

    )
}
