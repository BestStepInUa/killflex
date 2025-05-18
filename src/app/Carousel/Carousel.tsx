import { mediaData } from "@/media/media.data";
import { CarouselItem } from "./CaruselItem/CarouselItem";

export function Carousel() {
    return <div className="mx-auto mt-14">
            {mediaData.map((media, index) => (
                <CarouselItem
                    item={media}
                    index={index}
                    key={media.id}
                />
            ))}
        </div>;
    }