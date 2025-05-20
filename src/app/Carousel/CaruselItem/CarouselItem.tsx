'use client';

import Image from "next/image";
import { scale } from "motion";
import { useGetStyleRotation } from "./hooks/useGetStyleRotation";
import { ICarouselItem } from "./types/ICaruselItem.types";
import * as m from "motion/react-m"
import { AnimatePresence } from "motion/react";
import { useCarouselStore } from "@/store/carousel.store";
import { twMerge } from "tailwind-merge";
import { CarouselItemDetails } from "../CarouselItemDetails/CarouselItemDetails";

// TODO Details is also should be with animation

export function CarouselItem({ item, index, length, updateActiveCard }: ICarouselItem) {
    const {activeCardId, setActiveCardId} = useCarouselStore()
    const isActive = activeCardId === item.id
   
    const angleStep = 360 / length
    const angle = -90 + angleStep * index

    const radius = 430
    
	return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -${radius}px)`,
                zIndex: isActive ? 1 : 0,
            }}
        >
            <m.button
            className={twMerge(
                "rounded-xl will-change-transform relative transition overflow-hidden",
                // !isActive && "grayscale-100 contrast-75",
                isActive && "shadow-lg"
            )}            
            initial={{ 
                zIndex: 0,
                filter: "grayscale(100%) contrast(75%)"                
            }}
            animate={{
                scale: isActive ? 1.2 : 1,
                zIndex: isActive ? 1 : 0,
                filter: isActive ? "grayscale(0%) contrast(100%)" : "grayscale(100%) contrast(75%)"
            }}
            transition={{
                type: "keyframes",
                duration: 0.4,
                ease: "easeIn"
            }}
            onClick={updateActiveCard}        
        >   
            <AnimatePresence>
                {isActive && <CarouselItemDetails item={item} />}
            </AnimatePresence>
            <Image
                width={252}
                height={378}
                src={item.poster}
                alt={item.title}
                draggable="false"
                className="will-change-transform" 
                priority={index > 6 ? false : true}           
            />    
            </m.button>
        </div> 
        
	)
}