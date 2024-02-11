import { Barlow_Condensed, Barlow } from 'next/font/google'
import ExploreButton from './ButtonExplore'

const barlowCondensed = Barlow_Condensed ({
    weight: ["100", "400"],
    styles: ["regular"],
    subsets: ["latin"],
})

const barlow = Barlow ({
    weight: ["100", "400"],
    styles: ["regular"],
    subsets: ["latin"],
})

export default function TextSpace() {
    return (
        <div className='flex flex-col lg:flex-row items-center lg:items-end 2x1:container mx-[2.4rem] md:mx-[15.9rem] lg:mx-0 lg:ml-[16.5rem] mt-[4.8rem] md:mt-[10.6rem] lg:mt-[25.1rem] text-center lg:text-start'>

            <div className="w-[32.7rem] md:w-full lg:-[110rem] lg:w-[45rem] md:h-full">
            <h1 className={`${barlowCondensed.className} text-primary-darkLight text-[1.6rem] tracking-[2.7px] md:text-[2rem] lg:text-[2.8rem] md:tracking-[3.38px] uppercase`}>So, you want to travel to</h1>

            <span className={`text-[8em] md:text-[15em] uppercase`}>Space</span> 

            <p className={`${barlow.className} text-primary-darkLight text-[1.5rem] md:text-[1.6rem] lg:text-1.8rem leading-[25px] md:leading-[28px]`}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

            <ExploreButton />
        </div>
    )
}