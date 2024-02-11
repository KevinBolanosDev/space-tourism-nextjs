"use client"

import Link from "next/link";
import Image from "next/image";
import { Barlow_Condensed } from 'next/font/google'
import { useState } from "react";

import Logo from "@/components/images/LogoHeader";
import hamburger from "../../public/assets/shared/icon-hamburger.svg"
import hamburgerClose from "../../public/assets/shared/icon-close.svg"

const barlowCondensed = Barlow_Condensed ({
    weight: ["400"],
    styles: ["regular"],
    subsets: ["latin"],
})

export default function Navbar() {
    const [ isMenuOpen, setMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <div className="2xl:container flex justify-between w-[32.7rem] md:w-[72.9em] lg:w-[138.5em] h-[4rem] md:h-[9.6rem] mx-[2.4rem] md:mx-0 md:ml-[3.9rem] lg:ml-[5.5rem] mt-[2.4rem] md:mt-0 lg:mt-[4rem] relative items-center">

            <Logo />

            <div className="relative lg:w-[47.3em] xl:h-[.1em] bg-gray-500 md:absolute lg:z-20 lg:ml-[11.2rem]"></div>

            <div className={`${barlowCondensed.className} fixed md:absolute top-0 right-0 h-full w-[25.4rem] md:w-[45rem] lg:w-[83rem] md:flex backdrop-blur-xl md:justify-center md:items-center ${isMenuOpen ? 'block' : 'hidden'} z-10`}>

            <div className="w-[25.4rem] top-0 md:right-0 h-full md:w-full absolute bg-white opacity-5 -z-10"></div>

            <button className={`flex items-center h-[4rem] ml-auto mr-[2.4rem] mt-[2.4rem] mb-[5.4rem] sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
                <Image
                    className="w-[1.91rem] h-[1.91rem]"
                    src={hamburgerClose}
                />
            </button>
            <ul className="md:flex uppercase text-[1.6rem] md:text-[1.4rem] lg:text-[1.6rem] md:w-[45rem] md:justify-evenly tracking-[2.7px] md:tracking-[2.36px] lg:tracking-[2.7px] lg:gap-[4.8rem]">
            
                <li className="mb-[3.2rem] ml-[3.2rem] md:mb-0 md:ml-0">
                    <Link className="flex gap-[1.2rem]" href='/'>
                        <p className="font-bold md:hidden lg:block">00</p>
                        <p>Home</p>
                    </Link>
                </li>
                <li className="mb-[3.2rem] ml-[3.2rem] md:mb-0 md:ml-0">
                    <Link className="flex gap-[1.2rem]" href='/destination/moon'>
                        <p className="font-bold md:hidden lg:block">01</p> 
                        <p>Destination</p>
                    </Link>
                </li>
                <li className="mb-[3.2rem] ml-[3.2rem] md:mb-0 md:ml-0">
                    <Link className="flex gap-[1.2rem]" href='/crew'>
                        <p className="font-bold md:hidden lg:block">02</p>
                        <p>Crew</p>
                    </Link>
                </li>
                <li className="mb-[3.2rem] ml-[3.2rem] md:mb-0 md:ml-0">
                    <Link className="flex gap-[1.2rem]" href='/technology'>
                        <p className="font-bold md:hidden lg:block">03</p> 
                        <p>Technology</p>
                    </Link>
                </li>
            </ul>
                </div>

            <button className={`sm:hidden ${isMenuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
                <Image 
                    src={hamburger}
                />
            </button>
        </div>
    )
}