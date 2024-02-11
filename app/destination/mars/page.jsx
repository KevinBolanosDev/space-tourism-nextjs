import Image from "next/image";
import { Barlow_Condensed, Barlow } from "next/font/google";

import mars from "../../../public/assets/destination/image-mars.png";

const barlowCondensed = Barlow_Condensed({
  weight: ["100", "400"],
  styles: ["regular"],
  subsets: ["latin"],
});

const barlow = Barlow({
  weight: ["100", "400"],
  styles: ["regular"],
  subsets: ["latin"],
});

export default function Mars() {
  return (
    <div>

      <div>
        <section className="flex flex-col items-center">
          <Image
            className="w-[17em] md:w-[30em] h-[17em] md:h-[30em] mt-[3.2rem] md:mt-[6rem] mb-[2.6rem] md:mb-[5.3rem]"
            src={mars}
            alt="Planet Mars"
          />
        </section>

        <seciton>
          <h1 className="text-[5.6rem] md:text-[8rem] mt-[calc(7.4rem-2.6rem)] md:mt-[calc(11.9rem-5.3rem)] md:mb-[.8rem] uppercase text-center">
            mars
          </h1>

          <p
            className={`${barlow.className} text-[1.5rem] md:text-[1.6rem] text-center text-primary-darkLight mx-[2.4rem] leading-[25px] md:leading-[28px] md:w-[57.3rem] md:mx-auto`}
          >
            Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
          </p>
        </seciton>

        <div className="w-[32.7em] md:w-[57.3em] h-[.1em] bg-gray-500 mx-[2.4rem] md:mx-auto my-[3.2rem]"></div>

        <section className="uppercase text-center md:flex md:w-[57.3em] md:justify-evenly md:mx-auto">
          <div>
          <p
            className={`${barlowCondensed.className} text-[1.4rem] text-primary-darkLight tracking-[2.36px]`}
            >
            avg. distance
          </p>
          <p className="text-[2.8rem] mb-[3.2rem]">225 mil. km</p>
          </div>
          <div>
          <p
            className={`${barlowCondensed.className} text-[1.4rem] text-primary-darkLight`}
            >
            est. travel time
          </p>
          <p className="text-[2.8rem]">9 months</p>
            </div>
        </section>
      </div>

    </div>
  );
}
