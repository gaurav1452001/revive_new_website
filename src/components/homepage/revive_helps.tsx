import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HelpersSection from './helpersSection'
const ReviveHelps = () => {
    return (
        <div className='flex flex-col bg-[#f5faf6] w-full' >
            <div className='bg-[#386641] px-6 py-8 md:py-32 md:px-24 lg:py-48 lg:px-36 xl:px-52 pb-32'>
                <div className='flex flex-col md:flex-row gap-9 md:gap-8'>
                    <div className='md:w-1/2 text-2xl md:text-5xl'>
                        We Can Help in more ways
                    </div>
                    <div className='md:w-1/2 text-sm md:text-xl grid grid-cols-1'>
                        <p>
                            Revive is the ultimate solution for eco-conscious families looking to make a positive impact on the environment while earning money.
                        </p>
                        <div className='flex flex-col justify-center items-baseline py-5 text-sm gap-4'>
                            <div className="flex flex-col gap-4">
                                <Link
                                    href="#"
                                    className="flex justify-baseline px-5 py-3 flex-row gap-3 items-center rounded-3xl bg-[#ffffff] text-[#386641] shadow-sm shadow-neutral-500 min-w-[220px] w-[220px]"
                                >
                                    <Image src="/logo_android.svg" alt="Android" width={15} height={15} className='fill-amber-700' />
                                    Download for Android
                                </Link>
                                <Link
                                    href="#"
                                    className="flex justify-baseline px-5 py-3 flex-row gap-3 items-center rounded-3xl bg-[#ffffff] text-[#386641] shadow-sm shadow-neutral-500 min-w-[220px] w-[220px]"
                                >
                                    <Image src="/logo_apple.svg" alt="iOS" width={15} height={15} className='fill-amber-600'/>
                                    Download for iOS
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HelpersSection />
        </div>
    )
}

export default ReviveHelps;
