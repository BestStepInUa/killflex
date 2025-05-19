import { mediaData } from "@/media/media.data";
import { CarouselItem } from "./CaruselItem/CarouselItem";

export function Carousel() {
    return <div className="mx-auto mt-14 relative w-[800px] h-[800px]">
            {mediaData.map((media, index) => (
                <CarouselItem
                    key={media.id}
                    item={media}
                    index={index}
                    length={mediaData.length}
                />
            ))}
        </div>;
    }