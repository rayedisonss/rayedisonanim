import React from 'react'
import { Card } from './Card'


export const CardGroup = () => {
    return (

        <>


            <div className='flex justify-evenly'>
                <Card name={"Sport Shoes"} description={"Rp20.000"} nameImage={"trendShoes1.png"} />
                <Card name={"Women Air Jordan"} description={"Rp20.000"} nameImage={"trendShoes2.png"} />
                <Card name={"Lifestyle Shoes"} description={"Rp20.000"} nameImage={"trendShoes3.png"} />
                {/* <Card name={"Lifestyle Shoes"} price={"Rp20.000"} nameImage={"trendShoes3.png"} /> */}
            </div>

        </>

    )
}
