"use client";

import React, {useRef } from "react";
import {
    useMotionValue,
} from "motion/react";

export const AnimatedTooltip = ({
    items,
}: {
    items: {
        id: number;
        name: string;
        designation: string;
        image: string;
    }[];
}) => {
    const x = useMotionValue(0);
    const animationFrameRef = useRef<number | null>(null);

    const handleMouseMove = (event: any) => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            const halfWidth = event.target.offsetWidth / 2;
            x.set(event.nativeEvent.offsetX - halfWidth);
        });
    };

    return (
        <>
            {items.map((item) => (
                <div
                    className="group relative -mr-4"
                    key={item.name}
                >
                    <img
                        onMouseMove={handleMouseMove}
                        height={100}
                        width={100}
                        src={item.image}
                        alt={item.name}
                        className="relative !m-0 h-10 w-10 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
                    />
                </div>
            ))}
        </>
    );
};
