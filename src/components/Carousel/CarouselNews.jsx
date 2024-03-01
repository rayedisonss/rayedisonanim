import React from 'react'

export const CarouselNews = () => {
    return (


        <>

            <Splide aria-label='News' options={{ autoHeight: true, gap: "2rem", type: "loop" }}>
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
        </>





    )
}
