'use client';

import { scale } from "motion";
import { useGetStyleRotation } from "./hooks/useGetStyleRotation";
import { ICarouselItem } from "./types/ICaruselItem.types";
import * as m from "motion/react-m"
import Image from "next/image";
import { mediaData } from "@/media/media.data";
import { useCarouselStore } from "@/store/carousel.store";
import { twMerge } from "tailwind-merge";

export function CarouselItem({ item, index }: ICarouselItem) {
    const {activeCardId, setActiveCardId} = useCarouselStore()
    const {rotate, translateY} = useGetStyleRotation(
        index,
        mediaData.length,
    )

    const initialAnimation = {
        scale: 1,
        zIndex: 0,
        y: translateY,
        rotate
    }

	return (
        <m.button
            className={
                twMerge(
                    "inline-block rounded-xl will-change-transform relative border-2 border-transparent transition -ml-7 overflow-hidden",
                    activeCardId === item.id ? "grayscale-0" : "grayscale-100",
                )
            }            
            initial={{ scale: 1, zIndex: 0, y: 0 }}
            // animate={initialAnimation}
            transition={{ type: "keyframes", stiffness: 230, damping: 32 }}
            onClick={() => setActiveCardId(item.id)}        
        >
            <Image
                width={315}
                height={473}
                src={item.poster}
                alt={item.title}
                draggable={false}
                className="will-change-transform" 
                priority={index > 6 ? false : true}           
            />    
        </m.button>
	)
}