'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';




const Navbar = () => {
    const pathName = usePathname();
    return (
        <>
            <header className="text-white body-font bg-indigo-600">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl text-white">Navbar</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className={` ${pathName === '/' ? 'underline decoration-white underline-offset-4 decoration-2' : ''} mr-5 text-white hover:text-indigo-200`}
                        >Home</Link>
                        <Link href="/About" className={` ${pathName === '/About' ? 'underline decoration-white underline-offset-4 decoration-2' : ''} mr-5 text-white hover:text-indigo-200`}>About</Link>
                        <Link href="/Contact" className={` ${pathName === '/Contact' ? 'underline decoration-white underline-offset-4 decoration-2' : ''} mr-5 text-white hover:text-indigo-200`}>Contact</Link>
                </nav>
            </div>
        </header >
        </>
    )
}

export default Navbar
