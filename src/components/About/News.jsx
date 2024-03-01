import React from 'react'
import { Card } from '../CardsShoes/Card'

export const News = () => {
    return (
        <div className="container mx-auto">

            <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-3'>
                <Card name={"REshop & Abibas"} nameImage={"news1.jpg"} />
                <Card name={"Rapat dengan Kine"} nameImage={"news2.jpg"} />
                <Card name={"Olahraga Bersama"} nameImage={"news3.jpg"} />


            </div>
        </div>
    )
}
