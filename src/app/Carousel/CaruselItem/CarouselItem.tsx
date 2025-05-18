import { scale } from "motion";
import { useGetStyleRotation } from "./hooks/useGetStyleRotation";
import { ICarouselItem } from "./types/ICaruselItem.types";
import * as m from "motion/react-m"
import Image from "next/image";

export function CarouselItem({ index, item, arrayLength }: ICarouselItem) {
    const {rotate, translateY} = useGetStyleRotation(
        index,
        arrayLength
    )

    const initialAnimation = {
        scale: 1,
        zIndex: 0,
        y: translateY,
        rotate
    }

	return (
        <m.button
            className="h-[8.5rem] w-24 inline-block rounded-lg will-change-transform 
                      relative border-2 border-transparent transition-colors -ml-7"
            initial={{ scale: 1, zIndex: 0, y: 0 }}
            animate={initialAnimation}
            transition={{ type: "keyframes", stiffness: 230, damping: 32 }}        
        >
            <Image
                width={315}
                height={473}
                src={item.poster}
                alt={item.title}
                draggable={false}
                className="will-change-transform"            
            />    
        </m.button>
	)
}