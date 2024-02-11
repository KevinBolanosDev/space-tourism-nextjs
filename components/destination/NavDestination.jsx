import Link from "next/link";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
    weight: ["100", "400"],
    styles: ["regular"],
    subsets: ["latin"],
  });

export default function NavbarDestination() {
    return (
        <div>
        <nav className="absolute mt-[22.8rem] md:mt-[41.3rem] mx-[6.9rem] md:mx-[24.1rem]">
        <ul
          className={`${barlowCondensed.className} flex gap-[2.4rem] md:gap-[3.6rem] text-[1.4rem] md:text-[1.6rem] uppercase text-primary-darkLight tracking-[2.36px] md:tracking-[2.7px] hover:text-primary-white`}
        >
          <li>
            <Link href="/destination/moon">moon</Link>
          </li>
          <li>
            <Link href="/destination/mars">mars</Link>
          </li>
          <li>
            <Link href="/destination/europa">europa</Link>
          </li>
          <li>
            <Link href="/destination/titan">titan</Link>
          </li>
        </ul>
      </nav>
      </div>
    )
}