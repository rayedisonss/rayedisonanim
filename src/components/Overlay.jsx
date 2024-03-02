import { Scroll, useScroll } from '@react-three/drei'
import React, { useState } from 'react'
import { Navbar } from './Navbar';
import { useFrame } from '@react-three/fiber';

const Section = (props) => {
    return (
        <section className={`h-screen flex flex-col justify-center p-10 ${props.right ? "items-end" : "items-start"
            }`}>
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-secondary text-white  rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section >
    )
}

export const Overlay = () => {

    const scroll = useScroll()
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);


    useFrame(() => {
        setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
        setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
        setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
    })




    return (
        <Scroll html>

            <div class="w-screen">
                <Section>
                    <h1 className="font-semibold font-serif sm:text-2xl text-sm text-center">
                        Butuh Sepatu yang Nyaman dengan Gaya Memukau?
                    </h1>

                    <p className="animate-bounce  mt-6 text-center">↓</p>
                </Section>
                <Section right >
                    <h1 className="font-semibold font-serif sm:text-2xl text-sm text-center">
                        Lebih dari Sekadar Alas Kaki
                    </h1>

                    <p className="animate-bounce text-center mt-6">↓</p>
                </Section>
                <Section>
                    <h1 className="font-semibold font-serif sm:text-2xl text-sm text-center">
                        🤙 Tunggu apa lagi? Belilah di <br />

                    </h1>
                    <p className="mt-6 p-3 bg-primary rounded-lg text-center">
                        <a className='font-semibold font-serif sm:text-2xl text-sm text-center'>REShop</a>
                    </p>
                </Section>
            </div>
        </Scroll>
    );
};