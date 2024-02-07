import Image from "next/image"
import logo from "../../public/assets/shared/logo.svg"

export default function Logo() {
    return (
        <>
            <Image
            className="w-[4em] h-auto md:w-[4.8em] md:h-auto md:ml-[55px]"
            src={logo}
            alt="Logo"
            />
        </>
    )
}