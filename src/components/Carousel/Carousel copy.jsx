import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

export const Carousel = () => {
    return (
        <>
            <div className="flex justify-center">

                <div className="container">


                    <Splide aria-label='Some Product' options={{ autoHeight: true, perPage: 4, gap: "2rem" }}>
                        <SplideSlide>
                            <img src="/image/Aerith.jpg" alt="image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/image/trendShoes1.png" alt="image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/image/Aerith.jpg" alt="image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/image/trendShoes1.png" alt="image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/image/Aerith.jpg" alt="image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/image/trendShoes1.png" alt="image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="/image/Aerith.jpg" alt="image 1" />
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