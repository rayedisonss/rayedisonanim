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
                    <h1 className="font-semibold font-serif text-2xl">
                        Hello, I'm Wawa Sensei
                    </h1>
                    <p className="mt-3">I know:</p>
                    <ul className="leading-9">
                        <li>🧑‍💻 How to code</li>
                        <li>🧑‍🏫 How to learn</li>
                        <li>📦 How to deliver</li>
                    </ul>
                    <p className="animate-bounce  mt-6">↓</p>
                </Section>
                <Section right >
                    <h1 className="font-semibold font-serif text-2xl">
                        Here are my skillsets 🔥
                    </h1>
                    <p className="mt-3">
                        <b>Frontend 🚀</b>
                    </p>
                    <ul className="leading-9">
                        <li>ReactJS</li>
                        <li>React Native</li>
                        <li>VueJS</li>
                        <li>Tailwind</li>
                    </ul>
                    <p className="mt-3">
                        <b>Backend 🔬</b>
                    </p>
                    <ul className="leading-9">
                        <li>NodeJS</li>
                        <li>tRPC</li>
                        <li>NestJS</li>
                        <li>PostgreSQL</li>
                    </ul>
                    <p className="animate-bounce  mt-6">↓</p>
                </Section>
                <Section>
                    <h1 className="font-semibold font-serif text-2xl">
                        🤙 Call me maybe?
                    </h1>
                    <p className="mt-6 p-3 bg-primary rounded-lg">
                        📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
                    </p>
                </Section>
            </div>
        </Scroll>
    );
};