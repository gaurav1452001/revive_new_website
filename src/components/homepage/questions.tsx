"use client"
import React, { useState } from 'react'
import { CirclePlus, CircleMinus } from 'lucide-react';
import { questionsData } from '@/lib/revive_questions';

const Questions = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpansion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col max-w-sm font-sans sm:max-w-2xl lg:max-w-5xl xl:max-w-6xl px-3 sm:px-1 mx-auto '>
            <div className='flex flex-col bg-[#fff9eb] rounded-2xl md:rounded-[4rem] mt-5  pt-20 pb-24'>
                <span className='text-2xl md:text-5xl md:px-8 text-center text-[#253612] mb-10'>Frequently Asked Questions</span>
                {questionsData.map((item, index) => (
                    <div key={index} className={`flex flex-col gap-4 mx-4 md:mx-8 px-3 sm:px-5 md:px-6 py-2.5 md:py-4 ${expandedIndex === index ? 'rounded-3xl' : 'rounded-none'} border-b border-[#e5e7eb] ${expandedIndex === index ? 'bg-[#f7f1e4]' : 'bg-[#fff9eb]'}`}>
                        <div 
                            className='flex flex-row text-[#253612] justify-between items-center py-3 md:py-4 rounded-2xl cursor-pointer transition w-full text-base'
                            onClick={() => toggleExpansion(index)}
                        >
                            <span className='mr-11 sm:mr-2 text-lg'>{item.question}</span>
                            {expandedIndex === index ? (
                                <CircleMinus height={27} width={27} className='fill-white invert' />
                            ) : (
                                <CirclePlus height={27} width={27} className='fill-white invert' />
                            )}
                        </div>
                        {expandedIndex === index && (
                            <div className='text-base text-[#4a5565]'>
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Questions
