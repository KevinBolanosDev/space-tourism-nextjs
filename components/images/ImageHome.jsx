import Image from 'next/image'
import home from "../../public/assets/home/background-home-desktop.jpg"
import homeMobile from "../../public/assets/home/background-home-mobile.jpg"

export default function HomeImage() {
    return (
        <>
        <Image
            className="fixed top-0 z-[-1] w-full h-full hidden lg:block"
            src={home}
            alt="Background Space Tourism"
        />
        <Image 
            className='fixed top-0 z-[-1] w-full h-full block lg:hidden'
            src={homeMobile}
            alt="Background Space Tourism"
        />
        </>
    )
}