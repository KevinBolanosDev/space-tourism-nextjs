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
        <div className='flex flex-col mx-[2.4rem] mt-[4.8rem] xl:flex-row items-center text-center xl:items-end justify-between w-[32.7em] h-[51em] xl:w-[110em] xl:h-[38.2rem] xl:mx-0 xl:ml-[17em] xl:mt-[25.1em]'>

            <div className="w-[32.7rem] h-[27.6rem] md:w-[45rem] md:h-full">
            <h1 className={`${barlowCondensed.className} text-primary-darkLight text-[1.6rem] tracking-[2.7px] xl:text-[2.8rem] xl:tracking-[4.72px] uppercase`}>So, you want to travel to</h1>

            <span className={`text-[8em] xl:text-[15em] uppercase`}>Space</span> 

            <p className={`${barlow.className} text-primary-darkLight text-[1.5em] leading-[25px] xl:text-[1.8em] xl:leading-[32px]`}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

            <ExploreButton />
        </div>
    )
}