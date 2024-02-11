import Image from "next/image";
import { Barlow_Condensed, Barlow } from "next/font/google";

import moon from "../../../public/assets/destination/image-moon.png";

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

export default function Moon() {
  return (
    <div>
      <div>
        <section className="flex flex-col items-center">
          <Image
            className="w-[17em] md:w-[30em] h-[17em] md:h-[30em] mt-[3.2rem] md:mt-[6rem] mb-[2.6rem] md:mb-[5.3rem]"
            src={moon}
            alt="Planet Moon"
          />
        </section>

        <seciton>
          <h1 className="text-[5.6rem] md:text-[8rem] mt-[calc(7.4rem-2.6rem)] md:mt-[calc(11.9rem-5.3rem)] md:mb-[.8rem] uppercase text-center">
            moon
          </h1>

          <p
            className={`${barlow.className} text-[1.5rem] md:text-[1.6rem] text-center text-primary-darkLight mx-[2.4rem] leading-[25px] md:leading-[28px] md:w-[57.3rem] md:mx-auto`}
          >
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
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
            <p className="text-[2.8rem] mb-[3.2rem]">384,400 km</p>
          </div>

          <div>
            <p
              className={`${barlowCondensed.className} text-[1.4rem] text-primary-darkLight`}
            >
              est. travel time
            </p>
            <p className="text-[2.8rem]">3 days</p>
          </div>
        </section>
      </div>
    </div>
  );
}
