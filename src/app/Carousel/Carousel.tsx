'use client';

import { useEffect, useLayoutEffect, useState } from "react";
import * as m from "motion/react-m"
import { mediaData } from "@/media/media.data";
import { useCarouselStore } from "@/store/carousel.store";
import { CarouselItem } from "./CaruselItem/CarouselItem";
import { useRouter } from "next/navigation";
import { useMainAnimationStore } from "@/store/main-animation.store";

const getCardIndex = (cardId: number) => mediaData.findIndex(item => item.id === cardId);

export function Carousel() {
    const {activeCardId, setActiveCardId} = useCarouselStore();     
    const [rotateAngle, setRotateAngle] = useState(0);

    const {changeState, resetState, isHideOtherCards} = useMainAnimationStore();

    useLayoutEffect(() => {
        resetState();
        setActiveCardId(4)
    }, []);

    useEffect(() => {
        mediaData.forEach(media => {            
            router.prefetch(`/media/${media.slug}`);
        })
    }, []);

    const router = useRouter();
    
    const totalCards = mediaData.length;
    const rotateAngleStep = 360 / totalCards;    
        
    const updateActiveCard = (id: number) => {
        if (activeCardId === id) {
            const url = `/media/${mediaData[getCardIndex(id)].slug}`;
            // router.prefetch(url);

            changeState("isNewPageAnimation", true);
            setTimeout(() => {
                changeState("isHideHeading", true),
                changeState("isHideOtherCards", true);
            }, 600);

            setTimeout(() => {
                router.push(url)
            }, 650);

            return;
        }

        const oldIndex = getCardIndex(activeCardId);        
        const newIndex = getCardIndex(id);
        
        let diff = newIndex - oldIndex;

        if (diff > totalCards / 2) {
            diff -= totalCards;
        } else if (diff < -totalCards / 2) {
            diff += totalCards;
        }        
        
        const newRotateAngle = -(diff * rotateAngleStep);        
        
        // newRotateAngle = newRotateAngle === 330 ? -30 : newRotateAngle;
        // newRotateAngle = newRotateAngle === -330 ? 30 : newRotateAngle;
        // newRotateAngle = newRotateAngle === 300 ? -60 : newRotateAngle;
        // newRotateAngle = newRotateAngle === -300 ? 60 : newRotateAngle;
        // newRotateAngle = newRotateAngle === 270 ? -90 : newRotateAngle;
        // newRotateAngle = newRotateAngle === -270 ? 90 : newRotateAngle;
               
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
                translateY: isHideOtherCards ? 200 : 0
            }}
            transition={{
                type: "keyframes",
                duration: 1
            }}
        >
        {mediaData.map((media, index) => (
            <CarouselItem
                key={media.id}
                item={media}
                index={index}
                updateActiveCard={updateActiveCard.bind(null, media.id)}
                
            />
        ))}
        </m.div> 
    )          
}