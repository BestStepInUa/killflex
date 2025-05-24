'use client';

import { useState } from "react";
import * as m from "motion/react-m"
import { mediaData } from "@/media/media.data";
import { useCarouselStore } from "@/store/carousel.store";
import { CarouselItem } from "./CaruselItem/CarouselItem";

const getCardIndex = (cardId: number) => mediaData.findIndex(item => item.id === cardId);

export function Carousel() {
    const {activeCardId, setActiveCardId} = useCarouselStore();     
    const [rotateAngle, setRotateAngle] = useState(0);

    const rotateAngleStep = 360 / mediaData.length;    
        
    const updateActiveCard = (id: number) => {
        if (activeCardId === id) return;
        
        const oldIndex = getCardIndex(activeCardId);        
        const newIndex = getCardIndex(id);
        
        const diff = newIndex - oldIndex;
        
        let newRotateAngle = -(diff * rotateAngleStep);
        
        newRotateAngle = newRotateAngle === 330 ? -30 : newRotateAngle;
        newRotateAngle = newRotateAngle === -330 ? 30 : newRotateAngle;
        newRotateAngle = newRotateAngle === 300 ? -60 : newRotateAngle;
        newRotateAngle = newRotateAngle === -300 ? 60 : newRotateAngle;
        newRotateAngle = newRotateAngle === 270 ? -90 : newRotateAngle;
        newRotateAngle = newRotateAngle === -270 ? 90 : newRotateAngle;
               
        setRotateAngle(prev => prev + newRotateAngle);        
        setActiveCardId(id);
    }

    return (
        <m.div className="mx-auto mt-60 relative w-[952px] h-[952px]"
            initial ={{ 
                rotate: 0
            }}
            animate={{
                rotate: rotateAngle ? `${rotateAngle}deg` : 0,
            }}
            transition={{
                type: "keyframes",
                duration: 0.6,
            }}
        >
        {mediaData.map((media, index) => (
            <CarouselItem
                key={media.id}
                item={media}
                index={index}
                length={mediaData.length}
                updateActiveCard={updateActiveCard.bind(null, media.id)}
            />
        ))}
        </m.div> 
    )          
}