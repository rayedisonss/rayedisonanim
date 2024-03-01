import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { Cube } from '@phosphor-icons/react/dist/ssr';
import { useNavigate } from 'react-router-dom';

export const CarouselView = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-center ">
                <div className="flex-col">

                    <div className="w-96 ">


                        <Splide aria-label='Some Product' options={{ autoHeight: true, type: 'loop' }}>
                            <SplideSlide>
                                <img src="/image/product/shoes1.png" alt="image 1" />
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/image/product/shoes2.png" alt="image 2" />
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/image/product/shoes3.png" alt="image 3" />
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/image/product/shoes4.png" alt="image 4" />
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/image/product/shoes5.png" alt="image 5" />
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/image/product/shoes6.png" alt="image 6" />
                            </SplideSlide>
                            <SplideSlide>
                                <img src="/image/product/shoes7.png" alt="image 7" />
                            </SplideSlide>
                        </Splide>

                    </div>



                    <div className="flex justify-center pt-6">
                        <button className="btn btn-primary " onClick={() => { navigate('/productviewer') }}>
                            <Cube size={24} />
                            LIHAT 3D
                        </button>
                    </div>
                </div>

            </div>

        </>
    )
}

