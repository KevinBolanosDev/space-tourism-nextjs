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
        <div className="flex justify-between w-[32.7rem] h-[4rem] mx-[2.4rem] mt-[2.4rem] md:w-[144em] md:h-[9.6rem] md:mx-0 md:mt-[4rem] md:relative items-center">

            <Logo />

            <div className="xl:w-[47.3em] xl:h-[.1em] bg-gray-500 md:absolute xl:z-10 xl:ml-[16.7em]"></div>

            <ul className={`${barlowCondensed.className} fixed md:absolute top-0 right-0 h-full w-[25.4rem] md:flex md:flex-row md:w-[83rem] md:h-[9.6rem] backdrop-blur-xl xl:justify-center  md:items-center md:gap-[4.8rem] uppercase text-[1.6rem] tracking-[2.7px] ${isMenuOpen ? 'block' : 'hidden'}`}>

            <div className="w-[25.4rem] h-full md:w-[83rem] md:h-[9.6rem] absolute bg-white opacity-5 -z-10"></div>

            <button className={`flex items-center h-[4rem] ml-auto mr-[2.4rem] mt-[2.4rem] mb-[5.4rem] sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
                <Image
                    className="w-[1.91rem] h-[1.91rem]"
                    src={hamburgerClose}
                />
            </button>
            
                <li className="mb-[3.2rem] ml-[3.2rem] md:mb-0 md:ml-0">
                    <Link className="flex gap-[1.2rem]" href='/'>
                        <p className="font-bold">00</p>
                        <p>Home</p>
                    </Link>
                </li>
                <li className="mb-[3.2rem] ml-[3.2rem] md:mb-0 md:ml-0">
                    <Link className="flex gap-[1.2rem]" href='/destination'>
                        <p className="font-bold">01</p> 
                        <p>Destination</p>
                    </Link>
                </li>
                <li className="mb-[3.2rem] ml-[3.2rem] md:mb-0 md:ml-0">
                    <Link className="flex gap-[1.2rem]" href='/crew'>
                        <p className="font-bold">02</p>
                        <p>Crew</p>
                    </Link>
                </li>
                <li className="mb-[3.2rem] ml-[3.2rem] md:mr-[12rem] md:mb-0 md:ml-0">
                    <Link className="flex gap-[1.2rem]" href='/technology'>
                        <p className="font-bold">03</p> 
                        <p>Technology</p>
                    </Link>
                </li>
            </ul>

            <button className={`sm:hidden ${isMenuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
                <Image 
                    src={hamburger}
                />
            </button>
        </div>
    )
}