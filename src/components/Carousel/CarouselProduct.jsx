import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { useNavigate } from 'react-router-dom';

export const CarouselProduct = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-center p-5">

                <div className="container">


                    <Splide aria-label='Some Product' options={{ autoHeight: true, perPage: 4, gap: "2rem", type: "loop" }}>
                        <SplideSlide>
                            <a href="" onClick={() => navigate('/product')}>
                                <img src="/image/product/shoes1.png" alt="image 1" />

                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href="" onClick={() => navigate('/product')}>
                                <img src="/image/product/shoes2.png" alt="image 2" />
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href="" onClick={() => navigate('/product')}>
                                <img src="/image/product/shoes3.png" alt="image 3" />
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href="" onClick={() => navigate('/product')}>
                                <img src="/image/product/shoes4.png" alt="image 4" />
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href="" onClick={() => navigate('/product')}>
                                <img src="/image/product/shoes5.png" alt="image 5" />
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href="" onClick={() => navigate('/product')}>
                                <img src="/image/product/shoes6.png" alt="image 6" />
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href="" onClick={() => navigate('/product')}>
                                <img src="/image/product/shoes7.png" alt="image 7" />
                            </a>
                        </SplideSlide>
                    </Splide>

                </div>

            </div>

        </>
    )
}


// <div className="w-full flex justify-center border">

//     <div className="container ">

//         <div className="carousel w-full">
//             <div id="slide1" className="carousel-item relative w-full">
//                 <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide4" className="btn btn-circle">❮</a>
//                     <a href="#slide2" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide2" className="carousel-item relative w-full">
//                 <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide1" className="btn btn-circle">❮</a>
//                     <a href="#slide3" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide3" className="carousel-item relative w-full">
//                 <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide2" className="btn btn-circle">❮</a>
//                     <a href="#slide4" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide4" className="carousel-item relative w-full">
//                 <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide3" className="btn btn-circle">❮</a>
//                     <a href="#slide1" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>