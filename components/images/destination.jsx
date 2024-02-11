import Image from "next/image"
import backgroundDesktop from "../../public/assets/destination/background-destination-desktop.jpg"
import backgroundMobile from "../../public/assets/destination/background-destination-mobile.jpg"

function Destination() {
    return (
        <div>
            <Image 
                className="fixed z-[-1] w-full h-full top-0 hidden sm:block"
                src={backgroundDesktop}
                alt="Background Destination"
            />
            <Image
                className="fixed z-[-1] w-full h-full top-0 block sm:hidden"
                src={backgroundMobile}
                alt="Background Destination"
            />
        </div>
    )
}

export default (
    Destination
) 