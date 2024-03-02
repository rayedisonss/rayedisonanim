import { Scroll } from '@react-three/drei'
import React from 'react'

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
                        Sepatu yang mencerminkan kepribadian dan gayamu yang unik?
                    </h1>

                    <p className="animate-bounce text-center mt-6">↓</p>
                </Section>
                <Section>
                    <h1 className="font-semibold font-serif sm:text-2xl text-sm text-center">
                        🤙 Semuanya ada di <br />

                    </h1>
                    <p className="mt-6 p-3 bg-primary rounded-lg text-center">
                        <a className='font-semibold font-serif sm:text-2xl text-sm text-center'>REShop</a>
                    </p>
                </Section>
            </div>
        </Scroll>
    );
};