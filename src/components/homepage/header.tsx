import React from 'react'
import { AnimatedTooltipPreview } from '@/components/homepage/tooltip'
const Header = () => {
    return (
        <div className='flex flex-col bg-[#f5faf6] m-8 rounded-2xl border border-neutral-200 items-center pt-5 px-3'>
            <div className='flex flex-row gap-7 items-center mt-8'>
                <AnimatedTooltipPreview />
                <div className='text-xs text-neutral-500'>
                    Trusted by thousands of healthy families
                </div>
            </div>
            <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 mx-auto px-5 sm:px-2 ">
                <div className="flex flex-col items-center justify-center mt-10 text-center font-semibold">
                    <div className="text-6xl text-[#253612] font-semibold">
                        Turn your waste into money using revive
                    </div>
                    <div className="text-3xl font-sans mt-5 font-semibold bg-gradient-to-r from-[#253612] via-[#253612] to-[#253612] bg-clip-text text-transparent">
                        using Revive
                    </div>
                    <div className="text-base md:text-lg font-extralight mt-10 lg:px-32 text-[#818281]">
                        <p>
                            Revive is the ultimate solution for eco-conscious families looking to make a positive impact on the environment while also benefiting financially.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-7 items-center mt-8'>
                <button className='bg-[#253612] text-white px-6 py-2 rounded-lg hover:bg-[#1f2b0e] transition duration-300'>
                    Get Started
                </button>
                <button className='bg-transparent text-[#253612] border border-[#253612] px-6 py-2 rounded-lg hover:bg-[#253612] hover:text-white transition duration-300'>
                    Learn More
                </button>
            </div>

        </div>
    )
}

export default Header
