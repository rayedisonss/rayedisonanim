import { Envelope, InstagramLogo } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer className="footer p-10  text-base-content container mx-auto ">
                <nav>
                    <h6 className="font-bold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <img src="/logoReshop.png" alt="" className='w-12' />
                    <p>Reshop Industries Ltd. <br />Providing reliable tech since 2024</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a> <InstagramLogo size={26} /> </a>
                        <a><Envelope size={26} /></a>

                    </div>
                </nav>
            </footer>
        </>
    )
}
