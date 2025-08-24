"use client"
import React from 'react'
import { CircleCheck } from 'lucide-react';
import Lottie from 'lottie-react';
import { helpersSectionData } from '@/lib/revive_helps';

const HelpersSection = () => {
    return (
        <div className='flex flex-col gap-6 justify-center align-items-center text-black font-sans mx-auto px-3 sm:px-5 -mt-24'>
            {helpersSectionData.map((helper, index) => (
                <div key={index} className='flex flex-col lg:flex-row bg-white rounded-2xl pt-6 pb-3 px-2 sm:px-4  w-full max-w-sm sm:max-w-2xl lg:max-w-5xl xl:max-w-6xl'>
                    <div className='flex flex-col px-2 sm:px-5 justify-between w-full lg:w-1/2 lg:py-6'>
                        <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6'>{helper.title}</h3>
                        <div className='flex flex-col'>
                            {helper.points.map((point, pointIndex) => (
                                <div key={pointIndex} className='text-sm sm:text-base md:text-lg flex flex-row gap-4 mb-4 sm:mb-5 items-start sm:items-baseline'>
                                    <CircleCheck className="h-5 w-5 sm:h-6 sm:w-6 mt-0.5 sm:mt-0 flex-shrink-0 fill-white invert" />
                                    <span>{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className='flex justify-center items-center rounded-xl w-full lg:w-1/2 mt-4 lg:mt-0 p-4 sm:p-6 lg:p-8 h-[350px] md:h-[450px] overflow-hidden'
                        style={{ background: helper.bgColor }}
                    >
                        <Lottie
                            animationData={helper.animation}
                            loop={true}
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HelpersSection
