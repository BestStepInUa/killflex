import { ICarouselItemDetails } from "./types/ICarouselItemDetails.types"
import { Star, TvMinimal } from "lucide-react"
import { easeOut } from "motion"
import * as m from "motion/react-m"

const animation = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
    transition: { duration: 0.6 }
}

export function CarouselItemDetails({item}: ICarouselItemDetails) {
    return (
        <div
            className="absolute inset-0 w-full h-full flex flex-col justify-between z-2">
            <div className="absolute left-2 top-2 w-[calc(100%-1rem)] flex justify-between items-center">
                <m.div className="bg-secondary text-black rounded py-0.5 px-2 flex items-center gap-1.5 text-xs"
                {...animation}>
                    <Star size={14} /> {item.rating.toFixed(1)}
                </m.div>
                <m.div className="bg-black/50 text-white rounded py-0.5 px-2 flex items-center gap-1.5 text-xs"
                {...animation}>
                    <TvMinimal size={14} /> TV Show
                </m.div>  
            </div>
            <m.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}            
                className="absolute bottom-0 left-0 w-full p-3 text-center bg-gradient-to-t from-black/100 to-black/0">
                <m.div {...animation}>
                    <h2 className="text-white font-medium mb-0.5">{item.title}</h2>
                    <div className="text-white/50 text-xs flex items-center justify-center gap-1">
                    <span>{item.year}</span> •
                    {item.seasons?.length && <span>{item.seasons?.length} Seasons</span>}{''}
                    •<span>All episodes</span>
                    </div>
                </m.div>  
            </m.div>                                
        </div>
    )  
}