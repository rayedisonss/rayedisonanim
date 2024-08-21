import React from 'react'

export const GridVert = () => {
    return (
        <div className="container mx-auto">
            <div class="grid grid-rows-3 md:grid-cols-3 gap-4 gap-y-5  place-items-center ">
                <div class=" row-start-2 row-span-2 border bg-primary">
                    <img src="/image/gallery/img1.jpg" alt="tes" className='w-96' />
                </div>
                <div class="row-end-3  row-span-2  border bg-primary">
                    <img src="/image/gallery/img2.jpg" alt="tes" className='w-96' />
                </div>
                <div class="row-start-1 row-end-4  border bg-primary">
                    <img src="/image/gallery/img3.jpg" alt="tes" className='w-96' />
                </div>
                <div class=" row-start-4 row-span-2 border bg-primary">
                    <img src="/image/gallery/img4.jpg" alt="tes" className='w-96' />
                </div>
                <div class="row-end-5  row-span-2  border bg-primary">
                    <img src="/image/gallery/img5.jpg" alt="tes" className='w-96' />
                </div>
                <div class="row-start-4 row-end-4  border bg-primary">
                    <img src="/image/gallery/img6.jpg" alt="tes" className='w-96' />
                </div>
            </div>

        </div>
    )
}
